import { allBlogs } from 'contentlayer/generated'
import { SITE } from '@/const'

function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

export async function GET() {
  const siteUrl = SITE.href?.replace(/\/$/, '') || 'https://d3x.foo'
  const posts = allBlogs
    .filter((p) => !p.draft)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  const items = posts
    .map((post) => {
      const url = `${siteUrl}${post.url}`
      const title = escapeXml(post.title)
      const description = escapeXml(post.description || '')
      const pubDate = new Date(post.date).toUTCString()
      return `
      <item>
        <title>${title}</title>
        <link>${url}</link>
        <guid isPermaLink="true">${url}</guid>
        <description>${description}</description>
        <pubDate>${pubDate}</pubDate>
      </item>`
    })
    .join('\n')

  const now = new Date().toUTCString()
  const feed = `<?xml version="1.0" encoding="UTF-8"?>
  <rss version="2.0">
    <channel>
      <title>${escapeXml(SITE.title)}</title>
      <link>${siteUrl}</link>
      <description>${escapeXml(SITE.description)}</description>
      <language>${SITE.locale || 'en-US'}</language>
      <lastBuildDate>${now}</lastBuildDate>
      ${items}
    </channel>
  </rss>`

  return new Response(feed, {
    status: 200,
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 's-maxage=300, stale-while-revalidate=600',
    },
  })
}

export const revalidate = 300


