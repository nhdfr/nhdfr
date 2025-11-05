import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from '@vercel/analytics/next';

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
        <html lang="en">
            <body>
                {children}
                <Analytics />
            </body>
        </html>
    );
}
