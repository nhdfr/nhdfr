import type { Project } from 'contentlayer/generated'
import Link from 'next/link'

interface ProjectCardProps {
    project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <div className="border border-[#31748f] rounded bg-[#1f1d2e] p-5   transition-all">
            <Link
                href={project.github || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
            >
                <h3 className="text-[#9ccfd8] group-hover:text-[#eb6f92] font-semibold text-base mb-3 transition-colors line-clamp-1">
                    {project.title}
                </h3>
            </Link>
            <p className="text-[#908caa] text-sm mb-4 leading-relaxed line-clamp-3">
                {project.description}
            </p>
            {project.technologies && project.technologies.length > 0 && (
                <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                        <span
                            key={index}
                            className="px-2 py-1 text-xs bg-[#26233a] text-[#908caa] border border-[#31748f] rounded hover:border-[#9ccfd8] transition-colors"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            )}
        </div>
    )
} 
