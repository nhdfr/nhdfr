import { allProjects } from 'contentlayer/generated'
import { sortByDate } from '@/lib/time'
import { getAllCategories } from '@/lib/categories'
import Link from 'next/link'

export default function ProjectsPage() {
  const categories = getAllCategories()

  return (
    <>
      <header>
        <h1>nhd / projects</h1>
        <nav>
          <Link href="/">[home]</Link>
          {" | "}
          <Link href="/blog">[blog]</Link>
        </nav>
      </header>

      <hr />

      {categories.map((category) => {
        const projectsInCategory = sortByDate(
          allProjects.filter((project) => project.category === category.id)
        )

        if (projectsInCategory.length === 0) return null

        return (
          <section key={category.id}>
            <h2>&gt;&gt; {category.label}</h2>
            <p>{category.description}</p>
            <ul>
              {projectsInCategory.map((project) => (
                <li key={project._id}>
                  <b>
                    {project.github ? (
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        {project.title}
                      </a>
                    ) : (
                      <Link href={`/project/${project.slug}`}>{project.title}</Link>
                    )}
                  </b>
                  {" - "}
                  {project.description}
                </li>
              ))}
            </ul>
            <hr />
          </section>
        )
      })}

      <footer>
        <p><small>© {new Date().getFullYear()} nhd</small></p>
      </footer>
    </>
  )
}
