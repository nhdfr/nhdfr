import React from "react";
import Link from "next/link";
import { Github, Twitter, Linkedin, Mail, Rss } from "lucide-react";

const Footer = () => {
    return (
        <footer className="border-t border-border/30">
            <div className="container mx-auto px-6 py-12 max-w-5xl">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="text-center md:text-left">
                        <p className="text-sm text-muted-foreground mb-2">
                            © 2025 Dex. All rights reserved.
                        </p>
                        <p className="text-xs text-muted-foreground/70">
                            Built with Next.js, TypeScript, and Tailwind CSS
                        </p>
                    </div>
                    
                    <div className="flex items-center gap-3">
                        <Link 
                            href="https://github.com/d3xfoo" 
                            className="inline-flex items-center justify-center rounded-lg h-10 w-10 bg-muted/50 border border-border/50 hover:bg-muted hover:border-border smooth-transition" 
                            aria-label="GitHub" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <Github className="h-[18px] w-[18px] text-muted-foreground" />
                        </Link>
                        <Link 
                            href="https://x.com/d3xfoo" 
                            className="inline-flex items-center justify-center rounded-lg h-10 w-10 bg-muted/50 border border-border/50 hover:bg-muted hover:border-border smooth-transition" 
                            aria-label="Twitter" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <Twitter className="h-[18px] w-[18px] text-muted-foreground" />
                        </Link>
                        <Link 
                            href="https://linkedin.com/in/d3xfoo" 
                            className="inline-flex items-center justify-center rounded-lg h-10 w-10 bg-muted/50 border border-border/50 hover:bg-muted hover:border-border smooth-transition" 
                            aria-label="LinkedIn" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <Linkedin className="h-[18px] w-[18px] text-muted-foreground" />
                        </Link>
                        <Link 
                            href="mailto:conversenahid@gmail.com" 
                            className="inline-flex items-center justify-center rounded-lg h-10 w-10 bg-muted/50 border border-border/50 hover:bg-muted hover:border-border smooth-transition" 
                            aria-label="Email"
                        >
                            <Mail className="h-[18px] w-[18px] text-muted-foreground" />
                        </Link>
                        <Link 
                            href="/rss.xml" 
                            className="inline-flex items-center justify-center rounded-lg h-10 w-10 bg-muted/50 border border-border/50 hover:bg-muted hover:border-border smooth-transition" 
                            aria-label="RSS"
                        >
                            <Rss className="h-[18px] w-[18px] text-muted-foreground" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 
