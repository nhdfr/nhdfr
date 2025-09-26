import { allBlogs, allProjects } from "contentlayer/generated";
import { sortByDate, formatDate } from "@/lib/time";
import Link from "next/link";
import InfoCard from "@/components/infoCard";
import ProjectCard from "@/components/ProjectCard";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  const recentBlogs = sortByDate(allBlogs.filter((blog) => !blog.draft)).slice(
    0,
    3,
  );
  const featuredProjects = sortByDate(
    allProjects.filter((project) => project.featured),
  ).slice(0, 3);

  return (
    <>
      <InfoCard />
      <main id="main" className="container mx-auto px-6 py-12 max-w-5xl">
        <section className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-light tracking-tight">Featured Projects</h2>
            <Link href="/project">
              <Button
                variant="ghost"
                className="group text-sm font-medium smooth-transition"
              >
                View all
                <ArrowRight
                  className="ml-2 transition-transform duration-200 group-hover:translate-x-1"
                  size={16}
                />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard key={project._id} project={project} />
            ))}
          </div>
        </section>

        {/* Blog List */}
        <section className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-light tracking-tight">Latest Writing</h2>
            <Link href="/blog">
              <Button
                variant="ghost"
                className="group text-sm font-medium smooth-transition"
              >
                Read all
                <ArrowRight
                  className="ml-2 transition-transform duration-200 group-hover:translate-x-1"
                  size={16}
                />
              </Button>
            </Link>
          </div>
          <div className="space-y-1">
            {recentBlogs.map((post, i) => (
              <Link
                key={post._id}
                href={post.url}
                className="group block p-6 rounded-xl hover:bg-muted/30 smooth-transition focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                tabIndex={0}
                aria-label={`Read blog post: ${post.title}`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-base leading-snug text-foreground group-hover:text-primary smooth-transition mb-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {formatDate(post.date)}
                    </p>
                  </div>
                  <ArrowRight
                    className="flex-shrink-0 w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 smooth-transition"
                    aria-hidden
                  />
                </div>
              </Link>
            ))}
          </div>
        </section>

      </main>
    </>
  );
}
