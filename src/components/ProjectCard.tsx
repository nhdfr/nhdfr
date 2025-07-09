import { formatDate } from '@/lib/time'
import { Github, Globe, Calendar, Tag, Target, BookOpen, AlertTriangle } from 'lucide-react'
import type { Project } from 'contentlayer/generated'

interface ProjectCardProps {
    project: Project
    compact?: boolean // For home page use
}

export default function ProjectCard({ project, compact = false }: ProjectCardProps) {
    if (compact) {
        return (
            <div className="border rounded-lg bg-background/70 p-4 hover:bg-background/90 transition-colors">
                {/* Compact Header */}
                <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                        <h3 className="text-lg font-bold mb-1">{project.title}</h3>
                        <p className="text-muted-foreground text-sm mb-2">{project.description}</p>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar size={12} />
                        {formatDate(project.date)}
                    </div>
                </div>

                {/* Compact Details */}
                <div className="space-y-3">
                    {/* Status and Category */}
                    <div className="flex flex-wrap gap-1">
                        {project.status && (
                            <div className="flex items-center gap-1 bg-accent px-2 py-0.5 rounded-full text-xs">
                                <Target size={12} />
                                {project.status}
                            </div>
                        )}
                        {project.category && (
                            <div className="flex items-center gap-1 bg-accent px-2 py-0.5 rounded-full text-xs">
                                <Tag size={12} />
                                {project.category}
                            </div>
                        )}
                    </div>

                    {/* Technologies */}
                    {project.technologies && project.technologies.length > 0 && (
                        <div className="flex flex-wrap gap-1">
                            {project.technologies.slice(0, 4).map((tech) => (
                                <span key={tech} className="bg-primary/10 text-primary px-2 py-0.5 rounded text-xs">
                                    {tech}
                                </span>
                            ))}
                            {project.technologies.length > 4 && (
                                <span className="text-xs text-muted-foreground">+{project.technologies.length - 4} more</span>
                            )}
                        </div>
                    )}

                    {/* Key Features (limited) */}
                    {project.features && project.features.length > 0 && (
                        <div>
                            <h4 className="font-semibold text-xs mb-1">Key Features</h4>
                            <ul className="list-disc list-inside text-xs text-muted-foreground space-y-0.5">
                                {project.features.slice(0, 3).map((feature, idx) => (
                                    <li key={idx}>{feature}</li>
                                ))}
                                {project.features.length > 3 && (
                                    <li className="text-muted-foreground">...and {project.features.length - 3} more</li>
                                )}
                            </ul>
                        </div>
                    )}

                    {/* Links */}
                    {(project.github || project.demo) && (
                        <div className="flex gap-2 pt-2 border-t">
                            {project.github && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="View on GitHub"
                                    className="flex items-center gap-1 px-2 py-1 border border-border rounded text-xs hover:bg-accent/40 transition-colors"
                                >
                                    <Github size={12} />
                                    GitHub
                                </a>
                            )}
                            {project.demo && (
                                <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Live Demo"
                                    className="flex items-center gap-1 px-2 py-1 border border-border rounded text-xs hover:bg-accent/40 transition-colors"
                                >
                                    <Globe size={12} />
                                    Demo
                                </a>
                            )}
                        </div>
                    )}
                </div>
            </div>
        )
    }

    // Full card layout
    return (
        <div className="border rounded-lg bg-background/70 p-6 hover:bg-background/90 transition-colors">
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                    <p className="text-muted-foreground mb-3">{project.description}</p>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar size={16} />
                    {formatDate(project.date)}
                </div>
            </div>

            {/* Project Details */}
            <div className="grid md:grid-cols-2 gap-6 mb-6">
                {/* Left Column */}
                <div className="space-y-4">
                    {/* Status and Category */}
                    <div className="flex flex-wrap gap-2">
                        {project.status && (
                            <div className="flex items-center gap-1 bg-accent px-3 py-1 rounded-full text-sm">
                                <Target size={14} />
                                {project.status}
                            </div>
                        )}
                        {project.category && (
                            <div className="flex items-center gap-1 bg-accent px-3 py-1 rounded-full text-sm">
                                <Tag size={14} />
                                {project.category}
                            </div>
                        )}
                    </div>

                    {/* Technologies */}
                    {project.technologies && project.technologies.length > 0 && (
                        <div>
                            <h3 className="font-semibold mb-2 flex items-center gap-2">
                                <Tag size={16} />
                                Technologies
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech) => (
                                    <span key={tech} className="bg-primary/10 text-primary px-2 py-1 rounded text-sm">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Features */}
                    {project.features && project.features.length > 0 && (
                        <div>
                            <h3 className="font-semibold mb-2">Features & Functionality</h3>
                            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                                {project.features.map((feature, idx) => (
                                    <li key={idx}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

                {/* Right Column */}
                <div className="space-y-4">
                    {/* Learning */}
                    {project.learning && (
                        <div>
                            <h3 className="font-semibold mb-2 flex items-center gap-2">
                                <BookOpen size={16} />
                                Learning & Takeaways</h3>
                            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                                {project.learning.map((learning, idx) => (
                                    <li key={idx}> {learning} </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Challenges */}
                    {project.challenges && (
                        <div>
                            <h3 className="font-semibold mb-2 flex items-center gap-2">
                                <AlertTriangle size={16} />
                                Challenges & Solutions
                            </h3>
                            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                                {project.challenges.map((challenges, idx) => (
                                    <li key={idx}>{challenges} </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>

            {/* Footer - Links */}
            {(project.github || project.demo) && (
                <div className="flex gap-3 pt-4 border-t">
                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="View on GitHub"
                            className="flex items-center gap-2 px-4 py-2 border border-border rounded-md text-sm hover:bg-accent/40 transition-colors"
                        >
                            <Github size={16} />
                            View on GitHub
                        </a>
                    )}
                    {project.demo && (
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Live Demo"
                            className="flex items-center gap-2 px-4 py-2 border border-border rounded-md text-sm hover:bg-accent/40 transition-colors"
                        >
                            <Globe size={16} />
                            Live Demo
                        </a>
                    )}
                </div>
            )}
        </div>
    )
} 
