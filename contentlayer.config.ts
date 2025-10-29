import { defineDocumentType, makeSource } from "contentlayer/source-files";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";

export const Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: `blog/**/*.md`,
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
      required: true,
    },
    date: {
      type: "date",
      required: true,
    },
    author: {
      type: "string",
      required: false,
    },
    tags: {
      type: "list",
      of: { type: "string" },
      required: false,
    },
    featured: {
      type: "boolean",
      required: false,
    },
    draft: {
      type: "boolean",
      required: false,
    },
    image: {
      type: "string",
      required: false,
    },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
    },
    url: {
      type: "string",
      resolve: (doc) =>
        `/blog/${doc._raw.flattenedPath.split("/").slice(1).join("/")}`,
    },
  },
}));

export const Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: `project/**/*.md`,
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
      required: true,
    },
    date: {
      type: "date",
      required: true,
    },
    technologies: {
      type: "list",
      of: { type: "string" },
      required: false,
    },
    github: {
      type: "string",
      required: false,
    },
    featured: {
      type: "boolean",
      required: false,
    },
    category: {
      type: "string",
      required: false,
    },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
    },
    url: {
      type: "string",
      resolve: (doc) =>
        `/project/${doc._raw.flattenedPath.split("/").slice(1).join("/")}`,
    },
  },
}));

export default makeSource({
  contentDirPath: "src/content",
  documentTypes: [Blog, Project],
  markdown: {
    remarkPlugins: [
      [
        remarkGfm,
        {
          singleTilde: false,
          tableCellPadding: true,
          tablePipeAlign: true,
        },
      ],
    ],
    rehypePlugins: [
      rehypeSlug,
      rehypeAutolinkHeadings,
      [
        rehypePrettyCode,
        { theme: "github-dark-dimmed", keepBackground: false },
      ] as any,
    ],
  },
});
