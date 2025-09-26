import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const InfoCard = () => {
  return (
    <section
      className="container mx-auto px-6 pt-16 pb-12 max-w-5xl"
      aria-labelledby="site-hero"
    >
      <div className="relative">
        {/* Subtle background accent */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 rounded-2xl" />
        
        <div className="relative p-8 md:p-12">
          <div className="max-w-3xl">
            <h1
              id="site-hero"
              className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-balance mb-6"
            >
              Hi, I'm <span className="gradient-text font-medium">Dex</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 text-balance">
              I write TypeScript and build web applications that don't suck. Currently
              obsessed with performance, clean architecture, and making developers'
              lives easier through better tooling and automation.
            </p>

            <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mb-10">
              <span className="px-3 py-1.5 rounded-full bg-muted/50 border border-border/50">React/Node.js</span>
              <span className="px-3 py-1.5 rounded-full bg-muted/50 border border-border/50">VIM devotee</span>
              <span className="px-3 py-1.5 rounded-full bg-muted/50 border border-border/50">Home server tinkerer</span>
              <span className="px-3 py-1.5 rounded-full bg-muted/50 border border-border/50">6 cats</span>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href="/blog" className="inline-flex">
                <Button size="lg" className="gap-2 hover-lift smooth-transition">
                  Read the blog <ArrowRight size={18} aria-hidden />
                </Button>
              </Link>
              <Link href="/project" className="inline-flex">
                <Button size="lg" variant="outline" className="gap-2 hover-lift smooth-transition">
                  View projects <ArrowRight size={18} aria-hidden />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoCard;
