import Link from "next/link"
import { SITE, NAV_LINKS } from "@/const"
import { ModeToggle } from "./theme-toggle"
import { Button } from "./ui/button"
import { Menu } from "lucide-react"
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from "./ui/dropdown-menu"

export default function Header() {
    return (
        <header className="bg-background/50 sticky top-0 z-10 backdrop-blur-md">
            <div className="container mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-4 p-4">
                <Link href="/" className="font-bold flex shrink-0 items-center gap-2 text-xl">
                    <img src="/header.png" alt="Dex logo" className="w-20 max-h-14 object-contain" />
                    <span className="sr-only">{SITE.title}</span>
                </Link>
                {/* Desktop nav */}
                <div className="hidden md:flex items-center gap-2 md:gap-4">
                    <nav className="flex items-center gap-4 text-sm sm:gap-6">
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
