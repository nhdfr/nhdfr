import type { Project } from "contentlayer/generated";
import ProjectCard from "./ProjectCard";

interface ProjectGridProps {
  projects: Project[];
  columns?: 2 | 3 | 4;
}

export default function ProjectGrid({ projects, columns = 2 }: ProjectGridProps) {
  const gridColsClass = {
    2: "grid-cols-1 md:grid-cols-2 gap-5",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5",
  };

  return (
    <div className={`grid ${gridColsClass[columns]}`}>
      {projects.map((project) => (
        <ProjectCard key={project._id} project={project} />
      ))}
    </div>
  );
}
