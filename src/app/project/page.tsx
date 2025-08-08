import { allProjects } from 'contentlayer/generated'
import { sortByDate } from '@/lib/time'
import ProjectCard from '@/components/ProjectCard'

export default function ProjectsPage() {
  const sortedProjects = sortByDate(allProjects)

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {sortedProjects.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
    </div>
  )
}
