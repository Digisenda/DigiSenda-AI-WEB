import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content');

export interface PostMetadata {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    author?: string;
}

export interface PostData extends PostMetadata {
    content: string;
}

export function getSortedPostsData(): PostMetadata[] {
    if (!fs.existsSync(postsDirectory)) return [];
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames
        .filter((fileName) => fileName.endsWith('.mdx'))
        .map((fileName) => {
            const slug = fileName.replace(/\.mdx$/, '');
            const fullPath = path.join(postsDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, 'utf8');
            const { data } = matter(fileContents);
            return {
                slug,
                title: data.title || 'Untitled',
                date: data.date || new Date().toISOString(),
                excerpt: data.excerpt || '',
                author: data.author || 'DigiSenda Team',
            };
        });

    return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostData(slug: string): PostData {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    return {
        slug,
        title: data.title,
        date: data.date,
        excerpt: data.excerpt,
        author: data.author,
        content,
    };
}
