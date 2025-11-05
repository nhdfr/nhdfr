"use client"
import { Suspense } from 'react'
import { allBlogs } from 'contentlayer/generated'
import { sortByDate } from '@/lib/time'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

const POSTS_PER_PAGE = 20

export default function BlogPageWrapper() {
  return (
    <Suspense>
      <BlogPage />
    </Suspense>
  )
}

function BlogPage() {
  const searchParams = useSearchParams()
  const publishedBlogs = sortByDate(allBlogs.filter(blog => !blog.draft))
  const totalPages = Math.ceil(publishedBlogs.length / POSTS_PER_PAGE)
  const page = Number(searchParams.get('page')) || 1
  const start = (page - 1) * POSTS_PER_PAGE
  const end = start + POSTS_PER_PAGE
  const blogsToShow = publishedBlogs.slice(start, end)

  return (
    <>
      <header>
        <h1>nhd / writings</h1>
        <nav>
          <Link href="/">[home]</Link>
          {" | "}
          <Link href="/project">[projects]</Link>
        </nav>
      </header>

      <hr />

      <section>
        <ul>
          {blogsToShow.map((post) => (
            <li key={post._id}>
              <Link href={post.url}>{post.title}</Link>
              {" - "}
              <time>
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </time>
            </li>
          ))}
        </ul>
      </section>

      {/* Pagination */}
      {totalPages > 1 && (
        <>
          <hr />
          <nav>
            {page > 1 && (
              <>
                <Link href={`/blog?page=${page - 1}`}>← prev</Link>
                {" | "}
              </>
            )}
            
            {[...Array(totalPages)].map((_, i) => (
              <span key={i}>
                {page === i + 1 ? (
                  <b>[{i + 1}]</b>
                ) : (
                  <Link href={`/blog?page=${i + 1}`}>{i + 1}</Link>
                )}
                {i < totalPages - 1 && " "}
              </span>
            ))}
            
            {page < totalPages && (
              <>
                {" | "}
                <Link href={`/blog?page=${page + 1}`}>next →</Link>
              </>
            )}
          </nav>
        </>
      )}

      <hr />

      <footer>
        <p><small>© {new Date().getFullYear()} nhd</small></p>
      </footer>
    </>
  )
}
