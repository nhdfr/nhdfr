import { allBlogs, allProjects } from 'contentlayer/generated'
import { sortByDate, formatDate } from '@/lib/time'
import Link from 'next/link'
import InfoCard from '@/components/infoCard'
import ProjectCard from '@/components/ProjectCard'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function HomePage() {
    const recentBlogs = sortByDate(allBlogs.filter(blog => !blog.draft)).slice(0, 3)
    const featuredProjects = sortByDate(allProjects.filter(project => project.featured)).slice(0, 3)

    return (
        <>
            <InfoCard />
            <main id="main" className="container mx-auto px-4 py-8 max-w-4xl">
                {/* Blog List */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">Latest Blog Posts</h2>
                    <div className="space-y-3 sm:space-y-0 sm:divide-y sm:divide-border sm:border sm:border-border sm:rounded-lg sm:bg-[hsl(var(--card))]">
                        {recentBlogs.map((post, i) => (
                            <Link
                                key={post._id}
                                href={post.url}
                                className="flex flex-col gap-2 sm:grid sm:grid-cols-[1fr_auto] items-start sm:items-center px-4 py-3 border border-border rounded-md bg-background/70 sm:border-none sm:rounded-none sm:bg-transparent hover:bg-black/5 dark:hover:bg-white/5 transition-colors group focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                tabIndex={0}
                                aria-label={`Read blog post: ${post.title}`}
                            >
                                <span className="flex items-start gap-2 sm:gap-3 min-w-0 w-full">
                                    <span className="hidden sm:block w-6 shrink-0 tabular-nums text-foreground/60" aria-hidden>
                                        {(i + 1).toString()}.
                                    </span>
                                    <span className="font-medium text-base whitespace-normal break-words leading-snug line-clamp-2 pr-2 flex items-center gap-2">
                                        {post.title}
                                        <span className="opacity-0 translate-x-[-2px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" aria-hidden>
                                            →
                                        </span>
                                    </span>
                                </span>
                                <span className="self-end sm:self-auto text-muted-foreground text-[11px] sm:text-sm whitespace-nowrap sm:min-w-[120px] sm:text-right sm:justify-self-end mt-0.5 sm:mt-0">{formatDate(post.date)}</span>
                            </Link>
                        ))}
                    </div>
                    <div className="flex justify-center mt-4">
                        <Link href="/blog">
                            <Button
                                variant="ghost"
                                className="group px-4 py-2 bg-transparent hover:bg-accent transition-colors flex items-center gap-2"
                            >
                                See all posts
                                <ArrowRight className="transition-transform duration-200 group-hover:translate-x-1" size={18} />
                            </Button>
                        </Link>
                    </div>
                </section>

                {/* Projects Section */}
                <section>
                    <h2 className="text-2xl font-semibold mb-4">Featured Projects</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {featuredProjects.map((project) => (
                            <ProjectCard key={project._id} project={project} />
                        ))}
                    </div>
                    <div className="flex justify-center mt-4">
                        <Link href="/project">
                            <Button
                                variant="ghost"
                                className="group px-4 py-2 bg-transparent hover:bg-accent transition-colors flex items-center gap-2"
                            >
                                See all projects
                                <ArrowRight className="transition-transform duration-200 group-hover:translate-x-1" size={18} />
                            </Button>
                        </Link>
                    </div>
                </section>
            </main>
        </>
    )
}
