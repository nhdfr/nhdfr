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
            <div className="container mx-auto px-4 py-8 max-w-4xl">
                {/* Blog List */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">Latest Blog Posts</h2>
                    <div className="divide-y divide-border border rounded-lg bg-background/70">
                        {recentBlogs.map((post) => (
                            <Link
                                key={post._id}
                                href={post.url}
                                className="flex items-center justify-between px-4 py-3 hover:bg-accent/40 transition-colors group rounded-none focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                tabIndex={0}
                                aria-label={`Read blog post: ${post.title}`}
                            >
                                <span className="font-medium  text-base truncate max-w-[70%]">{post.title}</span>
                                <span className="text-muted-foreground text-sm min-w-[120px] text-right">{formatDate(post.date)}</span>
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
                    <div className="grid gap-4">
                        {featuredProjects.map((project) => (
                            <ProjectCard key={project._id} project={project} /* compact={true} */ />
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
            </div>
        </>
    )
}
