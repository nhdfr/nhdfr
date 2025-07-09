import Link from "next/link"
import React from "react"
import { SITE, NAV_LINKS } from "@/const"
import { ModeToggle } from "./theme-toggle"

export default function Header() {
    return (
        <header className="bg-background/50 sticky top-0 z-10 backdrop-blur-md">
            <div className="container mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-4 p-4">
                <Link href="/" className="font-bold flex shrink-0 items-center gap-2 text-xl">
                    <img src="/favicon.svg" alt="Nturf" className="w-6 h-6" />
                    {SITE.title}
                </Link>
                <div className="flex items-center gap-2 md:gap-4">
                    <nav className="hidden items-center gap-4 text-sm sm:gap-6 md:flex">
                        {NAV_LINKS.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="text-foreground/60 hover:text-foreground/80 capitalize transition-colors"
                            >
                                {item.label}
                            </Link>
                        ))}
                        <ModeToggle />
                    </nav>
                </div>
            </div>
        </header>
    )
}
