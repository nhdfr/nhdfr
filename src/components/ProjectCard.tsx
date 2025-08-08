import { Github, Globe } from 'lucide-react'
import type { Project } from 'contentlayer/generated'

interface ProjectCardProps {
    project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
    // Single, simplified card layout
    return (
        <div className="group border border-border rounded-lg bg-[hsl(var(--card))] p-4 hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
            <div className="flex items-start justify-between gap-3">
                <h3 className="text-base font-semibold leading-tight tracking-tight">{project.title}</h3>
                <div className="flex items-center gap-2 shrink-0">
                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="View on GitHub"
                            className="inline-flex items-center justify-center rounded-md h-8 w-8 border border-border hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                        >
                            <Github size={16} />
                        </a>
                    )}
                    {project.demo && (
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Open website"
                            className="inline-flex items-center justify-center rounded-md h-8 w-8 border border-border hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                        >
                            <Globe size={16} />
                        </a>
                    )}
                </div>
            </div>
            {project.description && (
                <p className="mt-1.5 text-sm text-muted-foreground leading-6">{project.description}</p>
            )}
        </div>
    )
} 
