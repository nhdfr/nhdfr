import type { Site, Social_Links } from "./types";

export const SITE: Site = {
    title: "nhd",
    author: "nhd",
    description: "",
    href: "https://nhdfr.dev",
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
        href: "https://x.com/nhdfrrr"
    },
    {
        label: "GitHub",
        href: "https://github.com/nhdfr"
    },
    {
        label: "Email",
        href: "mailto:nhdfr.dev@gmail.com" 
    }
]
