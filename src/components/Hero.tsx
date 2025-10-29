import Link from "next/link";
import Image from "next/image";

interface ContactLink {
  label: string;
  url: string;
}

interface NavLink {
  label: string;
  href: string;
}

interface HeroProps {
  name: string;
  title: string;
  description: string;
  navLinks?: NavLink[];
  contacts?: ContactLink[];
}

export default function Hero({
  name,
  title,
  description,
  navLinks = [],
  contacts = [],
}: HeroProps) {
  return (
    <div className="space-y-2">
      <div className="space-y-1">
        <div className="flex items-center justify-between gap-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#e0def4]">
            {name}
          </h1>
          <Image
            src="/cat.gif"
            alt="cat"
            width={80}
            height={80}
            className="rounded-lg"
            unoptimized
          />
        </div>
        <p className="text-xl text-[#908caa]">
          {title}
        </p>
      </div>

      {navLinks.length > 0 && (
        <div className="text-[#908caa] text-sm font-mono flex flex-wrap gap-1">
          {navLinks.map((link, index) => (
            <div key={link.href} className="flex items-center gap-1">
              {index > 0 && <span className="text-[#6e6a86]">:: </span>}
              <Link
                href={link.href}
                className="text-[#9ccfd8] hover:text-[#eb6f92] transition-colors"
              >
                {link.label}
              </Link>
            </div>
          ))}
        </div>
      )}

      <div className="border-t border-dashed border-[#31748f] my-2"></div>

      <div>
        <p className="text-[#908caa] leading-relaxed text-base">
          {description}
        </p>
      </div>

      {contacts.length > 0 && (
        <div className="space-y-2">
          <div className="border-t border-dashed border-[#31748f]"></div>
          <div className="text-[#908caa] text-sm font-mono flex flex-wrap gap-1">
            {contacts.map((contact, index) => (
              <div key={contact.label} className="flex items-center gap-1">
                {index > 0 && <span className="text-[#6e6a86]">:: </span>}
                <Link
                  href={contact.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#9ccfd8] hover:text-[#eb6f92] transition-colors"
                >
                  {contact.label}
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
