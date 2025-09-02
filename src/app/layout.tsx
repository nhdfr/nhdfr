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
    title: "Dex’s Playground – Experiments, Projects & Honest Write-ups",
    description: "Welcome to my playground for ideas that might someday catch fire (sometimes literally). I share code, workflow tricks, automation, and honest stories about building and breaking things.",
    keywords: [
        "playground",
        "d3xfoo",
        "experiments",
        "personal projects",
        "code",
        "automation",
        "VIM",
        "Linux",
        "TypeScript",
        "blog",
        "workflow",
        "dotfiles",
        "creative coding",
        "developer",
        "Dex"
    ],
    authors: [{ name: "Dex" }],
    creator: "Dex",
    publisher: "Dex",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL("https://d3x.foo"),
    alternates: {
        canonical: "/",
    },
    openGraph: {
        title: "Dex’s Playground – Experiments, Projects & Honest Write-ups",
        description: "Welcome to my playground for ideas that might someday catch fire (sometimes literally). I share code, workflow tricks, automation, and honest stories about building and breaking things.",
        url: "https://d3x.foo",
        siteName: "Dex’s Playground",
        images: [
            {
                url: "/web-app-manifest-512x512.png",
                width: 512,
                height: 512,
                alt: "Dex’s Playground",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Dex’s Playground – Experiments, Projects & Honest Write-ups",
        description: "Welcome to my playground for ideas that might someday catch fire (sometimes literally). I share code, workflow tricks, automation, and honest stories about building and breaking things.",
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
                    {/* Background ornaments */}
                    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.06),transparent_60%)]" />
                        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,transparent_70%,rgba(255,255,255,0.03))]" />
                    </div>
                    <Header />
                    <main className="flex-1 relative">{children}</main>
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
