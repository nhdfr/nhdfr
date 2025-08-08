"use client"

import Link from "next/link"
import { SITE, NAV_LINKS } from "@/const"
import { ModeToggle } from "./theme-toggle"
import { Button } from "./ui/button"
import { Menu } from "lucide-react"
import { usePathname } from "next/navigation"
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from "./ui/dropdown-menu"

export default function Header() {
    const pathname = usePathname()
    return (
        <header className="sticky top-0 z-10 bg-background/50 backdrop-blur-md supports-[backdrop-filter]:bg-background/60 border-b border-border/60">
            <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 bg-background text-foreground px-3 py-2 rounded">
                Skip to content
            </a>
            <div className="container mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-4 p-4">
                <Link href="/" className="flex shrink-0 items-center gap-2 text-sm font-medium tracking-tight">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-border bg-black/5 dark:bg-white/5">
                        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 text-foreground/90">
                            <path d="M7.5 9 L9.5 4 L11 8.5 Z" fill="currentColor"/>
                            <path d="M16.5 9 L14.5 4 L13 8.5 Z" fill="currentColor"/>
                            <circle cx="12" cy="13" r="6.5" fill="currentColor"/>
                        </svg>
                    </span>
                    <span className="text-foreground/90">Dex</span>
                    <span className="sr-only">{SITE.title}</span>
                </Link>
                {/* Desktop nav */}
                <div className="hidden md:flex items-center gap-4">
                    <nav className="flex items-center gap-4 text-sm sm:gap-6">
                        {NAV_LINKS.map((item) => {
                            const isActive = pathname === item.href
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    aria-current={isActive ? "page" : undefined}
                                    className={`capitalize transition-colors ${isActive ? "text-foreground" : "text-foreground/60 hover:text-foreground/80"}`}
                                >
                                    {item.label}
                                </Link>
                            )
                        })}
                        <ModeToggle />
                    </nav>
                </div>
                {/* Mobile nav */}
                <div className="flex md:hidden items-center gap-2">
                    <ModeToggle />
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="icon" aria-label="Open menu">
                                <Menu className="w-5 h-5" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            {NAV_LINKS.map((item) => (
                                <DropdownMenuItem asChild key={item.href}>
                                    <Link href={item.href} className="capitalize w-full block">
                                        {item.label}
                                    </Link>
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </header>
    )
}
