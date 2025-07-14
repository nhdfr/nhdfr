import React from "react";
import Link from "next/link";

const Footer = () => {
    return (
        <footer>
            <div className="container mx-auto px-4 py-8 max-w-4xl flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
                <span className="text-sm text-muted-foreground order-2 sm:order-1 text-center sm:text-left">
                    © 2025 All rights reserved. 
                </span>
                <div className="flex gap-2 order-1 sm:order-2">
                    <Link href="https://github.com/nturf" className="rounded-md border border-border p-2 hover:bg-accent/40 transition-colors" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.186 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.34-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.687-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.594 1.028 2.687 0 3.847-2.338 4.695-4.566 4.944.36.31.68.92.68 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.579.688.481C19.138 20.203 22 16.447 22 12.021 22 6.484 17.523 2 12 2Z" /></svg>
                    </Link>
                    <Link href="https://x.com/nturf" className="rounded-md border border-border p-2 hover:bg-accent/40 transition-colors" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M22 4.01c-.77.35-1.6.59-2.47.7a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04A4.28 4.28 0 0 0 11.5 8.03c0 .34.04.67.1.99A12.13 12.13 0 0 1 3.1 3.6a4.28 4.28 0 0 0 1.32 5.71c-.7-.02-1.36-.21-1.94-.53v.05a4.28 4.28 0 0 0 3.43 4.19c-.32.09-.66.14-1.01.14-.25 0-.48-.02-.71-.07a4.29 4.29 0 0 0 4 2.98A8.6 8.6 0 0 1 2 19.54a12.13 12.13 0 0 0 6.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19-.01-.37-.02-.56A8.7 8.7 0 0 0 24 4.59a8.48 8.48 0 0 1-2.46.67A4.28 4.28 0 0 0 22 4.01Z" /></svg>
                    </Link>
                    <Link href="mailto:conversenahid@gmail.com" className="rounded-md border border-border p-2 hover:bg-accent/40 transition-colors" aria-label="Email">
                        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><rect width="18" height="14" x="3" y="5" rx="2" /><path d="m3 7 8.29 6.36a2 2 0 0 0 2.42 0L22 7" /></svg>
                    </Link>
                    <Link href="/rss.xml" className="rounded-md border border-border p-2 hover:bg-accent/40 transition-colors" aria-label="RSS">
                        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><circle cx="6.18" cy="17.82" r="2.18" /><path d="M4 4.44a16 16 0 0 1 15.56 15.56" /><path d="M4 11a9 9 0 0 1 9 9" /></svg>
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 
