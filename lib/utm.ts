'use client';

const STORAGE_KEY = 'digisenda_utm';

export type UtmData = {
    source?: string;
    medium?: string;
    campaign?: string;
    referrer?: string;
};

// Captures UTM params (+ gclid/fbclid folded into source/medium) on first
// landing and persists them in sessionStorage so they survive navigation
// through the diagnóstico flow. Call once on the entry page's mount.
export function captureUtm(): void {
    if (typeof window === 'undefined') return;
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    const params = new URLSearchParams(window.location.search);
    const data: UtmData = {
        source: params.get('utm_source') ?? (params.get('gclid') ? 'google-ads' : params.get('fbclid') ? 'meta-ads' : undefined),
        medium: params.get('utm_medium') ?? undefined,
        campaign: params.get('utm_campaign') ?? undefined,
        referrer: document.referrer || undefined,
    };

    if (Object.values(data).some(Boolean)) {
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    }
}

export function getUtm(): UtmData | undefined {
    if (typeof window === 'undefined') return undefined;
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return undefined;
    try {
        return JSON.parse(raw) as UtmData;
    } catch {
        return undefined;
    }
}
