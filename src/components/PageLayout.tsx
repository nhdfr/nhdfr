import Hero from "./Hero";

interface PageLayoutProps {
  title?: string;
  children: React.ReactNode;
  showHero?: boolean;
}

export default function PageLayout({
  title,
  children,
  showHero = true,
}: PageLayoutProps) {
  const navLinks = [
    { label: "home", href: "/" },
    { label: "blog", href: "/blog" },
    { label: "projects", href: "/project" },
  ];

  const contactLinks = [
    { label: "email", url: "mailto:you@example.com" },
    { label: "github", url: "https://github.com/nhdfr" },
    { label: "twitter", url: "https://x.com/d3xfoo" },
    { label: "discord", url: "https://discord.com/users/your-id" },
  ];

  return (
    <div className="min-h-screen bg-[#16181c] p-8">
      <div className="w-full max-w-3xl mx-auto">
        
        {showHero && (
          <>
            <div className="mb-8">
              <Hero
                name="nhd"
                title="know your tools...."
                navLinks={navLinks}
                contacts={contactLinks}
              />
            </div>

            <div className="border-t border-dashed border-gray-700 my-6"></div>

            {title && (
              <div className="mb-8">
                <h2 className="text-2xl font-mono text-white">
                  {title}
                </h2>
              </div>
            )}
          </>
        )}

        {children}
      </div>
    </div>
  );
}
