import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Analytics } from '@vercel/analytics/next';

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "nhd",
    description: "",
    keywords: [
        "nhd",
        "nhdfr",
        "tui",
        "terminal",
        "code",
        "automation",
        "VIM",
        "Linux",
        "TypeScript",
        "golang",
        "go",
        "blog",
        "workflow",
        "dotfiles",
    ],
    authors: [{ name: "nhd" }],
    creator: "nhd",
    publisher: "nhd",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL("https://nhdfr.dev"),
    alternates: {
        canonical: "/",
    },
    openGraph: {
        title: "nhd",
        description: "",
        url: "https://nhdfr.dev",
        siteName: "nhd",
        images: [
            {
                url: "/web-app-manifest-512x512.png",
                width: 512,
                height: 512,
                alt: "nhd",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "nhd",
        description: "I spend most of my time building terminal tools and web apps, along with some fun side projects, gradually diving into core backend & systems stuff",
        images: ["/web-app-manifest-512x512.png"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    icons: {
        icon: [
            { url: "/favicon.ico" },
            { url: "/favicon.svg", type: "image/svg+xml" },
            { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
        ],
        apple: [
            { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
        ],
        other: [
            {
                rel: "mask-icon",
                url: "/favicon.svg",
            },
        ],
    },
    manifest: "/manifest.json",
};

export const viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem>
                    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
                        <div className="absolute inset-0 bg-[#191724]" />
                    </div>
                    <main className="flex-1 relative">{children}</main>
                    <Analytics />
                </ThemeProvider>
            </body>
        </html>
    );
}
