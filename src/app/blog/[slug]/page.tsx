import { allBlogs } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { formatDate } from '@/lib/time'


export async function generateStaticParams() {
    return allBlogs.map((post) => ({
        slug: post.slug,
    }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const post = allBlogs.find((post) => post.slug === slug)
    if (!post) return {}
    return {
        title: post.title,
        description: post.description,
        alternates: {
            canonical: `/blog/${post.slug}`,
        },
        openGraph: {
            title: post.title,
            description: post.description,
            type: 'article',
            url: `/blog/${post.slug}`,
        },
        twitter: {
            card: 'summary',
            title: post.title,
            description: post.description,
        },
    }
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const post = allBlogs.find((post) => post.slug === slug)

    if (!post) {
        notFound()
    }

    return (
        <article className="container mx-auto px-4 py-8 max-w-3xl">
            <header className="mb-8">
                <h1 className="text-4xl font-bold mb-4 leading-tight">{post.title}</h1>
                <div className="flex flex-wrap items-center gap-4 text-muted-foreground text-sm mb-2">
                    <time>{formatDate(post.date)}</time>
                    {post.author && <span>by {post.author}</span>}
                </div>
                {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-2">
                        {post.tags.map((tag) => (
                            <span key={tag} className="border border-border rounded px-2 py-0.5 text-xs text-muted-foreground">
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
            </header>

            <div className="prose prose-lg prose-gray dark:prose-invert max-w-none">
                <div dangerouslySetInnerHTML={{ __html: post.body.html }} />
            </div>
        </article>
    )
}
