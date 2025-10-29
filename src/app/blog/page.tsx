"use client"
import { Suspense } from 'react'
import { allBlogs } from 'contentlayer/generated'
import { sortByDate } from '@/lib/time'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import PageLayout from '@/components/PageLayout'

const POSTS_PER_PAGE = 12

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
    <PageLayout title="Writings">
      <div className="space-y-2">
        {blogsToShow.map((post) => (
          <div key={post._id} className="flex items-center justify-between gap-4 py-1 text-sm">
            <Link
              href={post.url}
              className="text-[#9ccfd8] hover:text-[#eb6f92] transition-colors flex-1 truncate"
            >
              {post.title}
            </Link>
            <time className="text-[#6e6a86] shrink-0">
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </time>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-8 pt-6 border-t border-dashed border-[#31748f]">
          <div className="flex justify-center items-center gap-2 text-sm font-mono">
            {page > 1 && (
              <Link
                href={`/blog?page=${page - 1}`}
                className="text-[#9ccfd8] hover:text-[#eb6f92] transition-colors underline"
              >
                ← prev
              </Link>
            )}
            
            <div className="flex items-center gap-1">
              {[...Array(totalPages)].map((_, i) => (
                <Link
                  key={i}
                  href={`/blog?page=${i + 1}`}
                  className={`px-2 py-1 transition-colors ${
                    page === i + 1 
                      ? 'text-[#e0def4] bg-[#26233a]' 
                      : 'text-[#9ccfd8] hover:text-[#eb6f92]'
                  }`}
                  aria-current={page === i + 1 ? 'page' : undefined}
                >
                  {i + 1}
                </Link>
              ))}
            </div>
            
            {page < totalPages && (
              <Link
                href={`/blog?page=${page + 1}`}
                className="text-[#9ccfd8] hover:text-[#eb6f92] transition-colors underline"
              >
                next →
              </Link>
            )}
          </div>
        </div>
      )}
    </PageLayout>
  )
}
