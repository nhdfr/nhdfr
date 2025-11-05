import type { Project } from "contentlayer/generated";
import Link from "next/link";

interface ProjectGridProps {
  projects: Project[];
  columns?: 2 | 3 | 4;
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <div className="space-y-1">
      {projects.map((project) => (
        <div key={project._id} className="flex items-start gap-6 py-1">
          <Link
            href={project.github || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#67b25e] hover:text-[#81c774] transition-colors min-w-[180px] font-mono text-sm"
          >
            {project.title}
          </Link>
          <p className="text-gray-400 text-sm flex-1">
            {project.description}
          </p>
        </div>
      ))}
    </div>
  );
}
