import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Header from "@/components/header";
import Footer from "@/components/footer";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "NTurf Studio – Code, Workflow & Linux Experiments",
    description: "A digital playground for code, workflow hacks, and creative experiments. Sharing insights on VIM, Linux, Next.js, TypeScript, and the art of making things work (or break).",
    keywords: [
        "vim",
        "workflow",
        "linux",
        "next.js",
        "typescript",
        "react",
        "coding",
        "productivity",
        "dotfiles",
        "terminal",
        "scripts",
        "config files",
        "personal blog",
        "developer tools",
        "nturf studio"
    ],
    authors: [{ name: "NTurf Studio" }],
    creator: "NTurf Studio",
    publisher: "NTurf Studio",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL("https://nturf.studio"),
    alternates: {
        canonical: "/",
    },
    openGraph: {
        title: "NTurf Studio – Code, Workflow & Linux Experiments",
        description: "A digital playground for code, workflow hacks, and creative experiments. Sharing insights on VIM, Linux, Next.js, TypeScript, and the art of making things work (or break).",
        url: "https://nturf.studio",
        siteName: "NTurf Studio",
        images: [
            {
                url: "/web-app-manifest-512x512.png",
                width: 512,
                height: 512,
                alt: "NTurf Studio",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "NTurf Studio – Code, Workflow & Linux Experiments",
        description: "A digital playground for code, workflow hacks, and creative experiments. Sharing insights on VIM, Linux, Next.js, TypeScript, and the art of making things work (or break).",
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
                    <Header />
                    <main className="flex-1">{children}</main>
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
