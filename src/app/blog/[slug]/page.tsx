import { allBlogs } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { formatDate } from '@/lib/time'
import ProseHtml from '@/components/ProseHtml'
import ScrollIndicator from '@/components/scroll-indicator'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'


export async function generateStaticParams() {
    return allBlogs.map((post) => ({
        slug: post.slug,
    }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const post = allBlogs.find((post) => post.slug === slug)
    if (!post) return {}
    
    const ogImage = post.image || '/web-app-manifest-512x512.png'
    const absoluteImageUrl = ogImage.startsWith('http') 
        ? ogImage 
        : `https://d3x.foo${ogImage}`
    
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
            images: [
                {
                    url: absoluteImageUrl,
                    width: 1200,
                    height: 630,
                    alt: post.title,
                }
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.description,
            images: [absoluteImageUrl],
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
        <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-800 p-8">
            <div className="w-full max-w-3xl mx-auto">
                
                {/* Back Button */}
                <div className="mb-12">
                    <Link 
                        href="/blog"
                        className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back to Writings
                    </Link>
                </div>
                
                <article>
                    {/* JSON-LD Breadcrumbs */}
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{
                            __html: JSON.stringify({
                                '@context': 'https://schema.org',
                                '@type': 'BreadcrumbList',
                                itemListElement: [
                                    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://d3x.foo/' },
                                    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://d3x.foo/blog' },
                                    { '@type': 'ListItem', position: 3, name: post.title, item: `https://d3x.foo/blog/${post.slug}` },
                                ],
                            }),
                        }}
                    />
                    
                    <header className="mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            {post.title}
                        </h1>
                        <div className="flex flex-wrap items-center gap-4 text-slate-400 text-sm mb-4">
                            <time>{formatDate(post.date)}</time>
                            {post.author && <span>by {post.author}</span>}
                        </div>
                        {post.tags && post.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2">
                                {post.tags.map((tag) => (
                                    <span key={tag} className="bg-slate-800/50 text-slate-300 rounded px-3 py-1 text-xs">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        )}
                    </header>

                    <div className="prose prose-invert prose-slate max-w-none prose-lg">
                        <ProseHtml html={post.body.html} />
                    </div>
                </article>
                
                <ScrollIndicator />
            </div>
        </div>
    )
}
