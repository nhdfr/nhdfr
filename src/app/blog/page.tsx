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
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Blog Posts</h1>
      <div className="divide-y divide-border border rounded-lg">
        {blogsToShow.map((post) => (
          <Link
            key={post._id}
            href={post.url}
            className="flex items-center justify-between px-4 py-3 hover:bg-accent/40 transition-colors group rounded-none focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            tabIndex={0}
            aria-label={`Read blog post: ${post.title}`}
          >
            <span className="font-medium  text-base truncate max-w-[70%]">{post.title}</span>
            <span className="text-muted-foreground text-sm min-w-[120px] text-right">{formatDate(post.date)}</span>
          </Link>
        ))}
      </div>
      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-8 select-none">
          <Link
            href={page > 1 ? `/blog?page=${page - 1}` : '#'}
            className={`flex items-center gap-1 px-2 py-1 text-sm rounded transition-colors ${page === 1 ? 'text-muted-foreground cursor-not-allowed' : 'hover:bg-accent/40 text-foreground'}`}
            aria-disabled={page === 1}
            tabIndex={page === 1 ? -1 : 0}
          >
            &lt; Previous
          </Link>
          {[...Array(totalPages)].map((_, i) => (
            <Link
              key={i}
              href={`/blog?page=${i + 1}`}
              className={`px-2 py-1 rounded text-sm transition-colors ${page === i + 1 ? 'border border-border bg-background' : 'hover:bg-accent/40'} ${page === i + 1 ? 'text-primary' : 'text-foreground'}`}
              aria-current={page === i + 1 ? 'page' : undefined}
            >
              {i + 1}
            </Link>
          ))}
          <Link
            href={page < totalPages ? `/blog?page=${page + 1}` : '#'}
            className={`flex items-center gap-1 px-2 py-1 text-sm rounded transition-colors ${page === totalPages ? 'text-muted-foreground cursor-not-allowed' : 'hover:bg-accent/40 text-foreground'}`}
            aria-disabled={page === totalPages}
            tabIndex={page === totalPages ? -1 : 0}
          >
            Next &gt;
          </Link>
        </div>
      )}
    </div>
  )
}
