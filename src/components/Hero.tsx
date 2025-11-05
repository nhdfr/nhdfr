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
  navLinks?: NavLink[];
  contacts?: ContactLink[];
}

export default function Hero({
  name,
  title,
  navLinks = [],
  contacts = [],
}: HeroProps) {
  return (
    <div className="space-y-2">
      <div className="space-y-1">
        <div className="flex items-center justify-between gap-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#67b25e]">
            {name}
          </h1>
          <Image
            src="/cat.gif"
            alt="cat"
            width={60}
            height={60}
            className="rounded-lg"
            unoptimized
          />
        </div>
        <p className="text-xl text-gray-400">{title}</p>
      </div>

      {navLinks.length > 0 && (
        <div className="text-gray-400 text-sm font-mono flex flex-wrap gap-1">
          {navLinks.map((link, index) => (
            <div key={link.href} className="flex items-center gap-1">
              {index > 0 && <span className="text-gray-600"> </span>}
              <Link
                href={link.href}
                className="text-[#67b25e] hover:text-[#81c774] transition-colors"
              >
                {link.label}
              </Link>
            </div>
          ))}
        </div>
      )}

      <div className="border-t border-dashed border-gray-700 my-2"></div>

      {contacts.length > 0 && (
        <div className="space-y-2">
          <div className="border-t border-dashed border-gray-700"></div>
          <div className="text-gray-400 text-sm font-mono flex flex-wrap gap-1">
            {contacts.map((contact) => (
              <div key={contact.label} className="flex items-center gap-1">
                <Link
                  href={contact.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#67b25e] hover:text-[#81c774] transition-colors"
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
