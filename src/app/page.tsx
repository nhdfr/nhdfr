import { allProjects } from "contentlayer/generated";
import Link from "next/link";
import Hero from "@/components/Hero";
import ProjectGrid from "@/components/ProjectGrid";

export default function HomePage() {
  const featuredProjects = allProjects
    .filter(project => project.featured)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 6);

  const navLinks = [
    { label: "blog", href: "/blog" },
    { label: "projects", href: "/project" },
  ];

  const contactLinks = [
    { label: "email", url: "mailto:you@example.com" },
    { label: "github", url: "https://github.com/nhdfr" },
    { label: "x.com", url: "https://x.com/d3xfoo" },
    { label: "discord", url: "https://discord.com/users/your-id" },
  ];

  return (
    <div className="min-h-screen bg-[#191724] p-8">
      <div className="w-full max-w-3xl mx-auto">
        <div className="mb-8">
          <Hero
            name="nhd"
            title="know your tools...."
            navLinks={navLinks}
            description="I spend most of my time building terminal tools and web apps, along with some fun side projects, gradually diving into core backend & systems stuff"
            contacts={contactLinks}
          />
        </div>

        <div className="border-t border-dashed border-[#31748f] my-6"></div>

        {featuredProjects.length > 0 && (
          <div>
            <h2 className="text-xl font-mono text-[#e0def4] mb-4">
              some projects
            </h2>
            <ProjectGrid projects={featuredProjects} columns={2} />

            <div className="mt-6">
              <p className="text-[#908caa] text-sm">
                check all of them{" "}
                <Link
                  href="/project"
                  className="text-[#9ccfd8] hover:text-[#eb6f92] transition-colors underline"
                >
                  here
                </Link>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
