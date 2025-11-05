import { allProjects } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { formatDate } from '@/lib/time'
import ProseHtml from '@/components/ProseHtml'
import Link from 'next/link'


export async function generateStaticParams() {
    return allProjects.map((post) => ({
        slug: post.slug,
    }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const post = allProjects.find((post) => post.slug === slug)
    if (!post) return {}
    return {
        title: post.title,
        description: post.description,
        alternates: {
            canonical: `/project/${post.slug}`,
        },
        openGraph: {
            title: post.title,
            description: post.description,
            type: 'article',
            url: `/project/${post.slug}`,
        },
        twitter: {
            card: 'summary',
            title: post.title,
            description: post.description,
        },
    }
}

export default async function ProjectPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const post = allProjects.find((post) => post.slug === slug)

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
                            { '@type': 'ListItem', position: 2, name: 'Project', item: 'https://nhdfr.dev/project' },
                            { '@type': 'ListItem', position: 3, name: post.title, item: `https://nhdfr.dev/project/${post.slug}` },
                        ],
                    }),
                }}
            />

            {/* Back Button */}
            <nav>
                <Link href="/project">← Back to projects</Link>
            </nav>

            <hr />

            <article>
                <header>
                    <h1>{post.title}</h1>
                    <p>
                        <time>{formatDate(post.date)}</time>
                    </p>
                    {post.github && (
                        <p>
                            <b>Source:</b> <a href={post.github} target="_blank" rel="noopener noreferrer">{post.github}</a>
                        </p>
                    )}
                    {post.technologies && post.technologies.length > 0 && (
                        <p>
                            <b>Tech:</b> {post.technologies.join(', ')}
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
                <p><Link href="/project">← Back to projects</Link></p>
            </footer>
        </>
    )
}
