import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const InfoCard = () => {
  return (
    <section
      className="container mx-auto px-4 pt-12 pb-8 max-w-4xl"
      aria-labelledby="site-hero"
    >
      <div className="rounded-lg border bg-background/60 backdrop-blur-md shadow-sm p-6">
        <h1
          id="site-hero"
          className="text-3xl md:text-4xl font-semibold tracking-tight"
        >
          About me!
        </h1>
        <p className="mt-3 text-foreground/90 text-sm md:text-base max-w-2xl">
          I write TypeScript and build web apps that don't suck. Currently
          obsessed with performance, clean architecture, and making developers'
          lives easier through better tooling.
        </p>

        <div className="mt-4 flex flex-wrap gap-2 text-xs text-muted-foreground">
          <span>React/Node.js</span>
          <span aria-hidden>•</span>
          <span>VIM devotee</span>
          <span aria-hidden>•</span>
          <span>Home server tinkerer</span>
          <span aria-hidden>•</span>
          <span>6 cats</span>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/blog" className="inline-flex">
            <Button size="sm" className="gap-2">
              Read the blog <ArrowRight size={16} aria-hidden />
            </Button>
          </Link>
          <Link href="/project" className="inline-flex">
            <Button size="sm" variant="ghost" className="gap-2">
              View projects <ArrowRight size={16} aria-hidden />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default InfoCard;
