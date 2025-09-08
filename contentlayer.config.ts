import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrettyCode from 'rehype-pretty-code'
import type { Options } from 'rehype-pretty-code'



export const Blog = defineDocumentType(() => ({
    name: 'Blog',
    filePathPattern: `blog/**/*.md`,
    fields: {
        title: {
            type: 'string',
            required: true,
        },
        description: {
            type: 'string',
            required: true,
        },
        date: {
            type: 'date',
            required: true,
        },
        author: {
            type: 'string',
            required: false,
        },
        tags: {
            type: 'list',
            of: { type: 'string' },
            required: false,
        },
        featured: {
            type: 'boolean',
            required: false,
        },
        draft: {
            type: 'boolean',
            required: false,
        },
    },
    computedFields: {
        slug: {
            type: 'string',
            resolve: (doc) => doc._raw.flattenedPath.split('/').slice(1).join('/'),
        },
        url: {
            type: 'string',
            resolve: (doc) => `/blog/${doc._raw.flattenedPath.split('/').slice(1).join('/')}`,
        },
    },
}))

export const Project = defineDocumentType(() => ({
    name: 'Project',
    filePathPattern: `project/**/*.md`,
    fields: {
        title: {
            type: 'string',
            required: true,
        },
        description: {
            type: 'string',
            required: true,
        },
        date: {
            type: 'date',
            required: true,
        },
        status: {
            type: 'enum',
            options: ['completed', 'in-progress', 'planned'],
            required: false,
        },
        technologies: {
            type: 'list',
            of: { type: 'string' },
            required: false,
        },
        github: {
            type: 'string',
            required: false,
        },
        demo: {
            type: 'string',
            required: false,
        },
        featured: {
            type: 'boolean',
            required: false,
        },
        category: {
            type: 'string',
            required: false,
        },
        client: {
            type: 'string',
            required: false,
        },
        budget: {
            type: 'string',
            required: false,
        },
        features: {
            type: 'list',
            of: { type: 'string' },
            required: false,
        },
        learning: {
            type: 'list',
            of: { type: 'string' },
            required: false,
        },
        challenges: {
            type: 'list',
            of: {type: 'string'},
            required: false,
        },
    },
    computedFields: {
        slug: {
            type: 'string',
            resolve: (doc) => doc._raw.flattenedPath.split('/').slice(1).join('/'),
        },
        url: {
            type: 'string',
            resolve: (doc) => `/project/${doc._raw.flattenedPath.split('/').slice(1).join('/')}`,
        },
    },
}))

export default makeSource({
    contentDirPath: 'src/content',
    documentTypes: [Blog, Project],
    markdown: {
        remarkPlugins: [
            // Configure remarkGfm with specific options to fix table parsing
            [remarkGfm, {
                singleTilde: false,
                tableCellPadding: true,
                tablePipeAlign: true
            }]
        ],
        rehypePlugins: [
            rehypeSlug,
            rehypeAutolinkHeadings,
            [rehypePrettyCode, { theme: 'github-dark-dimmed', keepBackground: false }] as any,
        ],
    },
})
