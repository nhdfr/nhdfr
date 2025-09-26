import type { Site, Social_Links } from "./types";

export const SITE: Site = {
    title: "D3xfoo",
    author: "Dex",
    description: "A personal playground for experiments, code, and creative projects by Dex. Explore tools, workflows, and honest write-ups about what works (and what breaks).",
    href: "https://d3x.foo",
    locale: "en-US",
}

export const NAV_LINKS: Social_Links[] = [
    {
        label: "blog",
        href: "/blog"
    },
    {
        label: "projects",
        href: "/project"
    }
]

export const SOCIAL_LINKS: Social_Links[] = [
    {
        label: "Twitter",
        href: "https://x.com/d3xfoo"
    },
    {
        label: "GitHub",
        href: "https://github.com/d3xfoo"
    },
    {
        label: "Email",
        href: "mailto:hey@d3x.foo" 
    }
]
