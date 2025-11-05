import type { Project } from 'contentlayer/generated'
import Link from 'next/link'

interface ProjectCardProps {
    project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <div className="border border-gray-700 rounded bg-[#1a1d23] p-5 hover:border-[#67b25e] hover:bg-[#1e2128] transition-all">
            <Link
                href={project.github || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
            >
                <h3 className="text-[#67b25e] group-hover:text-[#81c774] font-semibold text-base mb-3 transition-colors line-clamp-1">
                    {project.title}
                </h3>
            </Link>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-3">
                {project.description}
            </p>
            {project.technologies && project.technologies.length > 0 && (
                <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                        <span
                            key={index}
                            className="px-2 py-1 text-xs bg-[#1e2128] text-gray-400 border border-gray-700 rounded hover:border-[#67b25e] transition-colors"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            )}
        </div>
    )
} 
