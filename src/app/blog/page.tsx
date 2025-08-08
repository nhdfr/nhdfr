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
      <div className="space-y-3 sm:space-y-0 sm:divide-y sm:divide-border sm:border sm:border-border sm:rounded-lg sm:bg-[hsl(var(--card))]">
        {blogsToShow.map((post, i) => (
          <Link
            key={post._id}
            href={post.url}
            className="flex flex-col gap-2 sm:grid sm:grid-cols-[1fr_auto] items-start sm:items-center px-4 py-3 border border-border rounded-md bg-background/70 sm:border-none sm:rounded-none sm:bg-transparent hover:bg-black/5 dark:hover:bg-white/5 transition-colors group focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            tabIndex={0}
            aria-label={`Read blog post: ${post.title}`}
          >
            <span className="flex items-start gap-2 sm:gap-3 min-w-0 w-full">
              <span className="hidden sm:block w-6 shrink-0 tabular-nums text-foreground/60" aria-hidden>
                {(start + i + 1).toString()}.
              </span>
              <span className="font-medium text-base whitespace-normal break-words leading-snug line-clamp-2 pr-2">{post.title}</span>
            </span>
            <span className="self-end sm:self-auto text-muted-foreground text-[11px] sm:text-sm whitespace-nowrap sm:min-w-[120px] sm:text-right sm:justify-self-end mt-0.5 sm:mt-0">{formatDate(post.date)}</span>
          </Link>
        ))}
      </div>
      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-8 select-none">
          <Link
            href={page > 1 ? `/blog?page=${page - 1}` : '#'}
            className={`flex items-center gap-1 px-2 py-1 text-sm rounded-md transition-colors ${page === 1 ? 'text-muted-foreground cursor-not-allowed' : 'hover:bg-black/5 dark:hover:bg-white/5 text-foreground border border-border'}`}
            aria-disabled={page === 1}
            tabIndex={page === 1 ? -1 : 0}
          >
            &lt; Previous
          </Link>
          {[...Array(totalPages)].map((_, i) => (
            <Link
              key={i}
              href={`/blog?page=${i + 1}`}
              className={`px-2 py-1 rounded-md text-sm transition-colors border ${page === i + 1 ? 'border-border bg-black/5 dark:bg-white/5 text-foreground' : 'border-transparent hover:bg-black/5 dark:hover:bg-white/5 text-foreground/80'}`}
              aria-current={page === i + 1 ? 'page' : undefined}
            >
              {i + 1}
            </Link>
          ))}
          <Link
            href={page < totalPages ? `/blog?page=${page + 1}` : '#'}
            className={`flex items-center gap-1 px-2 py-1 text-sm rounded-md transition-colors ${page === totalPages ? 'text-muted-foreground cursor-not-allowed' : 'hover:bg-black/5 dark:hover:bg-white/5 text-foreground border border-border'}`}
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
