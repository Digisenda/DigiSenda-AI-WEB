// In-memory, per-instance rate limiter. Not distributed — on Vercel each
// serverless instance has its own counters, so this is a best-effort spam
// brake, not a hard guarantee. Good enough as a first line of defense
// alongside the honeypot; add a real store (Upstash, etc.) if abuse shows up.
const hits = new Map<string, { count: number; resetAt: number }>();

const WINDOW_MS = 60_000;
const MAX_REQUESTS = 5;
const MAX_TRACKED_KEYS = 5000;

function pruneExpired(now: number): void {
    for (const [key, entry] of hits) {
        if (now > entry.resetAt) {
            hits.delete(key);
        }
    }
}

export function isRateLimited(key: string): boolean {
    const now = Date.now();

    // Cheap bound on unbounded growth: only sweep once the map gets large,
    // rather than on every call.
    if (hits.size > MAX_TRACKED_KEYS) {
        pruneExpired(now);
    }

    const entry = hits.get(key);

    if (!entry || now > entry.resetAt) {
        hits.set(key, { count: 1, resetAt: now + WINDOW_MS });
        return false;
    }

    entry.count += 1;
    return entry.count > MAX_REQUESTS;
}
