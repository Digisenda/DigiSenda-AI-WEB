import Link from 'next/link';
import { getSortedPostsData } from '@/lib/posts';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Blog | DigiSenda AI",
    description: "Insights on digital identity, orchestration, and scaling.",
};

export default function BlogIndex() {
    const allPosts = getSortedPostsData();

    return (
        <div className="container" style={{ padding: "4rem 2rem" }}>
            <header style={{ marginBottom: "4rem", textAlign: "center" }}>
                <h1 className="metallic-text" style={{ fontSize: "3rem", marginBottom: "1rem" }}>Insights</h1>
                <p style={{ color: "var(--text-secondary)", fontSize: "1.2rem" }}>
                    Thoughts on building a sovereign digital ecosystem.
                </p>
            </header>

            <div style={{ display: "grid", gap: "2rem", maxWidth: "800px", margin: "0 auto" }}>
                {allPosts.map(({ slug, title, date, excerpt }) => (
                    <article key={slug} className="glass-panel" style={{ padding: "2rem", transition: "transform 0.2s" }}>
                        <small style={{ color: "var(--accent-blue)", fontWeight: 600 }}>{date}</small>
                        <h2 style={{ margin: "0.5rem 0", color: "var(--text-primary)" }}>
                            <Link href={`/blog/${slug}`} className="metallic-text" style={{ textDecoration: "none" }}>{title}</Link>
                        </h2>
                        <p style={{ color: "var(--text-secondary)", marginBottom: "1rem" }}>{excerpt}</p>
                        <Link href={`/blog/${slug}`} style={{ color: "var(--primary-metal)", textDecoration: "underline" }}>
                            Read Article →
                        </Link>
                    </article>
                ))}
                {allPosts.length === 0 && (
                    <p style={{ textAlign: "center", color: "var(--text-secondary)" }}>No posts found.</p>
                )}
            </div>
        </div>
    );
}
