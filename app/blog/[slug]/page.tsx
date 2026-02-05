import { getPostData, getSortedPostsData } from '@/lib/posts';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import type { Metadata } from 'next';

export async function generateStaticParams() {
    const posts = getSortedPostsData();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const post = getPostData(slug);
    return {
        title: `${post.title} | DigiSenda AI`,
        description: post.excerpt,
    };
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getPostData(slug);

    return (
        <article className="container" style={{ padding: "4rem 2rem", maxWidth: "800px" }}>
            <header style={{ marginBottom: "3rem", borderBottom: "1px solid var(--glass-border)", paddingBottom: "2rem" }}>
                <Link href="/blog" style={{ color: "var(--text-secondary)", fontSize: "0.9rem", marginBottom: "1rem", display: "inline-block" }}>
                    ← Back to Blog
                </Link>
                <h1 className="metallic-text" style={{ fontSize: "2.5rem", marginBottom: "1rem", lineHeight: 1.2 }}>{post.title}</h1>
                <div style={{ display: "flex", gap: "1rem", color: "var(--text-secondary)", fontSize: "0.9rem" }}>
                    <time>{post.date}</time>
                    <span>•</span>
                    <span>{post.author}</span>
                </div>
            </header>

            <div className="prose" style={{ color: "var(--text-primary)", lineHeight: 1.8 }}>
                <MDXRemote source={post.content} />
            </div>
        </article>
    );
}
