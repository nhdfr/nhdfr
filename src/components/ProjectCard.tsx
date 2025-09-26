import { Github, Globe } from 'lucide-react'
import type { Project } from 'contentlayer/generated'

interface ProjectCardProps {
    project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <div className="group relative p-6 rounded-2xl bg-gradient-to-br from-card/50 to-card/30 border border-border/50 hover:border-border hover:shadow-lg smooth-transition hover-lift">
            {/* Subtle background gradient on hover */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 smooth-transition" />
            
            <div className="relative">
                <div className="flex items-start justify-between gap-4 mb-4">
                    <h3 className="text-lg font-medium leading-tight tracking-tight text-foreground group-hover:text-primary smooth-transition">
                        {project.title}
                    </h3>
                    <div className="flex items-center gap-2 shrink-0">
                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="View on GitHub"
                                className="inline-flex items-center justify-center rounded-lg h-9 w-9 bg-muted/50 border border-border/50 hover:bg-muted hover:border-border smooth-transition"
                            >
                                <Github size={16} className="text-muted-foreground" />
                            </a>
                        )}
                        {project.demo && (
                            <a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Open website"
                                className="inline-flex items-center justify-center rounded-lg h-9 w-9 bg-muted/50 border border-border/50 hover:bg-muted hover:border-border smooth-transition"
                            >
                                <Globe size={16} className="text-muted-foreground" />
                            </a>
                        )}
                    </div>
                </div>
                {project.description && (
                    <p className="text-sm text-muted-foreground leading-relaxed">
                        {project.description}
                    </p>
                )}
            </div>
        </div>
    )
} 
