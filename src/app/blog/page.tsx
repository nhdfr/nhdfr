"use client"
import { Suspense } from 'react'
import { allBlogs } from 'contentlayer/generated'
import { sortByDate, formatDate } from '@/lib/time'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

const POSTS_PER_PAGE = 10

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
    <div className="container mx-auto px-6 py-12 max-w-5xl">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-4">Writing</h1>
        <p className="text-lg text-muted-foreground">
          Thoughts on development, tools, and the occasional life lesson.
        </p>
      </div>
      
      <div className="space-y-1">
        {blogsToShow.map((post, i) => (
          <Link
            key={post._id}
            href={post.url}
            className="group block p-6 rounded-xl hover:bg-muted/30 smooth-transition focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            tabIndex={0}
            aria-label={`Read blog post: ${post.title}`}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                <h2 className="font-medium text-lg leading-snug text-foreground group-hover:text-primary smooth-transition mb-2">
                  {post.title}
                </h2>
                <p className="text-sm text-muted-foreground">
                  {formatDate(post.date)}
                </p>
              </div>
              <div className="flex-shrink-0 w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 smooth-transition">
                →
              </div>
            </div>
          </Link>
        ))}
      </div>
      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-3 mt-12">
          <Link
            href={page > 1 ? `/blog?page=${page - 1}` : '#'}
            className={`flex items-center gap-2 px-4 py-2 text-sm rounded-lg smooth-transition ${
              page === 1 
                ? 'text-muted-foreground cursor-not-allowed' 
                : 'text-foreground hover:bg-muted/50 border border-border/50'
            }`}
            aria-disabled={page === 1}
            tabIndex={page === 1 ? -1 : 0}
          >
            ← Previous
          </Link>
          
          <div className="flex items-center gap-1">
            {[...Array(totalPages)].map((_, i) => (
              <Link
                key={i}
                href={`/blog?page=${i + 1}`}
                className={`px-3 py-2 rounded-lg text-sm smooth-transition ${
                  page === i + 1 
                    ? 'bg-primary text-primary-foreground' 
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/30'
                }`}
                aria-current={page === i + 1 ? 'page' : undefined}
              >
                {i + 1}
              </Link>
            ))}
          </div>
          
          <Link
            href={page < totalPages ? `/blog?page=${page + 1}` : '#'}
            className={`flex items-center gap-2 px-4 py-2 text-sm rounded-lg smooth-transition ${
              page === totalPages 
                ? 'text-muted-foreground cursor-not-allowed' 
                : 'text-foreground hover:bg-muted/50 border border-border/50'
            }`}
            aria-disabled={page === totalPages}
            tabIndex={page === totalPages ? -1 : 0}
          >
            Next →
          </Link>
        </div>
      )}
    </div>
  )
}
