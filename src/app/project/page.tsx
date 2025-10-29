import { allProjects } from 'contentlayer/generated'
import { sortByDate } from '@/lib/time'
import { getAllCategories } from '@/lib/categories'
import PageLayout from '@/components/PageLayout'
import ProjectGrid from '@/components/ProjectGrid'

export default function ProjectsPage() {
  const categories = getAllCategories()

  return (
    <PageLayout title="Projects">
      {categories.map((category) => {
        const projectsInCategory = sortByDate(
          allProjects.filter((project) => project.category === category.id)
        )

        if (projectsInCategory.length === 0) return null

        return (
          <div key={category.id} className="mb-12">
            <div className="mb-4">
              <h3 className="text-2xl font-semibold text-[#e0def4] mb-1">
                {category.label}
              </h3>
              <p className="text-[#908caa] text-sm">
                {category.description}
              </p>
            </div>
            <ProjectGrid projects={projectsInCategory} columns={2} />
            {categories.length > 1 && categories[categories.length - 1].id !== category.id && (
              <div className="border-t border-dashed border-[#31748f] my-8"></div>
            )}
          </div>
        )
      })}
    </PageLayout>
  )
}
