import type { Site, Social_Links } from "./types";

export const SITE: Site = {
    title: "Nturf",
    author: "Nahid",

    description: "A digital playground for code, workflow hacks, and creative experiments. Sharing insights on VIM, Linux, Next.js, TypeScript, and the art of making things work (or break).",
    href: "https://nturf.studio",
    locale: "en-US",
}

export const NAV_LINKS: Social_Links[] = [

    {
        label: "blog",
        href: "/blog"
    },
    {
        label: "Project",
        href: "/project"
    }
]

export const SOCIAL_LINKS: Social_Links[] = [
    {
        label: "Twitter",
        href: "https://x.com/nturfff"
    },
    {
        label: "GitHub",
        href: "https://github.com/nturf"
    },
    {
        label: "Email",
        href: "mailto:conversenahid@gmail.com" 
    }
]
