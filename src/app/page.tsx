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
    { label: "email", url: "mailto:nhdfr.dev@gmail.com" },
    { label: "github", url: "https://github.com/nhdfr" },
    { label: "twitter", url: "https://x.com/nhdfrrr" },
    { label: "discord", url: "https://discord.com/users/nhdfrr" },
  ];

  return (
    <div className="min-h-screen bg-[#16181c] p-8">
      <div className="w-full max-w-3xl mx-auto">
        <div className="mb-8">
          <Hero
            name="nhd"
            title="know your tools...."
            navLinks={navLinks}
            contacts={contactLinks}
          />
        </div>

        <div className="border-t border-dashed border-gray-700 my-6"></div>

        {featuredProjects.length > 0 && (
          <div>
            <h2 className="text-xl font-mono text-white mb-4">
              some projects
            </h2>
            <ProjectGrid projects={featuredProjects} />

            <div className="mt-6">
              <p className="text-gray-400 text-sm">
                check all of them{" "}
                <Link
                  href="/project"
                  className="text-[#67b25e] hover:text-[#81c774] transition-colors underline"
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
