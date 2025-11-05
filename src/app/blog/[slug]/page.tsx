import { allBlogs } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { formatDate } from '@/lib/time'
import ProseHtml from '@/components/ProseHtml'
import Link from 'next/link'


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
        <>
            {/* JSON-LD Breadcrumbs */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'BreadcrumbList',
                        itemListElement: [
                            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nhdfr.dev/' },
                            { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://nhdfr.dev/blog' },
                            { '@type': 'ListItem', position: 3, name: post.title, item: `https://nhdfr.dev/blog/${post.slug}` },
                        ],
                    }),
                }}
            />
            
            {/* Back Button */}
            <nav>
                <Link href="/blog">← Back to writings</Link>
            </nav>

            <hr />
            
            <article>
                <header>
                    <h1>{post.title}</h1>
                    <p>
                        <time>{formatDate(post.date)}</time>
                        {post.author && <> by {post.author}</>}
                    </p>
                    {post.tags && post.tags.length > 0 && (
                        <p>
                            <b>Tags:</b> {post.tags.join(', ')}
                        </p>
                    )}
                </header>

                <hr />

                <div className="prose">
                    <ProseHtml html={post.body.html} />
                </div>
            </article>

            <hr />

            <footer>
                <p><Link href="/blog">← Back to writings</Link></p>
            </footer>
        </>
    )
}
