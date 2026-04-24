export interface BlogPost {
    id: number;
    title: string;
    slug: string;
    category: string;
    excerpt: string;
    content: string;
    date: string;
    readTime: number;
}

const modules = import.meta.glob('../content/posts/*.md', {
    eager: true,
    query: '?raw',
    import: 'default',
}) as Record<string, string>;

function parseFrontmatter(raw: string): { data: Record<string, string>; body: string } {
    const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
    if (!match) return { data: {}, body: raw };
    const [, fm, body] = match;
    const data: Record<string, string> = {};
    for (const line of fm.split(/\r?\n/)) {
        const m = line.match(/^([A-Za-z0-9_]+)\s*:\s*(.*)$/);
        if (!m) continue;
        let value = m[2].trim();
        if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
            value = value.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
        }
        data[m[1]] = value;
    }
    return { data, body: body ?? '' };
}

function slugFromPath(path: string): string {
    const base = path.split('/').pop() ?? '';
    return base.replace(/\.md$/, '');
}

export const blogPosts: BlogPost[] = Object.entries(modules)
    .map(([path, raw]) => {
        const { data, body } = parseFrontmatter(raw);
        const slug = data.slug || slugFromPath(path);
        return {
            id: 0,
            title: data.title ?? '',
            slug,
            category: data.category ?? '',
            excerpt: data.excerpt ?? '',
            content: body.trim(),
            date: data.date ?? '',
            readTime: Number(data.readTime) || 0,
        };
    })
    .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : a.title.localeCompare(b.title)))
    .map((post, index) => ({ ...post, id: index + 1 }));
