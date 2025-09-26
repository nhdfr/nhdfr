import { allProjects } from 'contentlayer/generated'
import { sortByDate } from '@/lib/time'
import ProjectCard from '@/components/ProjectCard'

export default function ProjectsPage() {
  const sortedProjects = sortByDate(allProjects)

  return (
    <>
      
      <div className="container mx-auto px-6 py-12 max-w-5xl">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-4">Projects</h1>
          <p className="text-lg text-muted-foreground">
            A collection of tools, experiments, and side projects I've built.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedProjects.map((project) => (
            <ProjectCard key={project._id} project={project} />
          ))}
        </div>
      </div>
    </>
  )
}
