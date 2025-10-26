import { allBlogs } from "contentlayer/generated";
import { sortByDate } from "@/lib/time";
import Link from "next/link";
import { Github, Mail, Twitter } from "lucide-react";
import Image from "next/image";

export default function HomePage() {
  const topBlogs = sortByDate(
    allBlogs.filter((blog) => !blog.draft).slice(0, 3),
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-800 flex items-center justify-center p-8">
      <div className="w-full max-w-2xl mx-auto space-y-8">
        {/* Logo 
        <div className="flex justify-center">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={80}
            height={80}
            className="w-20 h-20"
          />
        </div>
*/}

        {/* Name and Title */}
        <div className=" space-y-3">
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            nhd
          </h1>
          <p className="text-xl text-slate-300">
            know your tools....
          </p>
        </div>

        <div >
          <p className="text-slate-400 leading-relaxed text-lg">
            I love building stuff that solves issues faced in day to day dev
            life. I love building full solutions plus I also love cloud and
            infra. I love TUI's terminal tools.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-white">Stuff I've Built</h2>

          <div className="space-y-4   mx-auto">
            <div>
              <p className="text-slate-300 leading-relaxed">
                <Link className="text-blue-400 font-bold underline" target="_blank" href="https://ciglider.vercel.app">ciglider </Link>
                i built this recently, when I was actually 
              </p>
            </div>


            <div>
              <p className="text-slate-300 leading-relaxed">
                <Link className="text-blue-400 font-bold underline" href="/">sweet-commit </Link>
                sweet-commit was rater easy to build, but this tools just meant to be a commit 
                helper, helps you to generate proper github convention style commits, based on your changes
              </p>
            </div>


            <div>
              <p className="text-slate-300 leading-relaxed">
                I also work on{" "}
                <strong className="text-blue-400">cloud infrastructure</strong>{" "}
                and <strong className="text-blue-400">automation tools</strong>
                that help streamline development workflows and deployment
                processes.
              </p>
            </div>
          </div>

          <div className=" space-x-8 pt-2">
            <Link
              href="/project"
              className="inline-block text-slate-400 hover:text-white underline underline-offset-4 transition-colors"
            >
              Work
            </Link>
            <Link
              href="/blog"
              className="inline-block text-slate-400 hover:text-white underline underline-offset-4 transition-colors"
            >
              Writings
            </Link>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6">
          <Link
            href="https://youtube.com/@d3xfoo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition-colors"
            aria-label="YouTube"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </Link>

          <Link
            href="https://x.com/d3xfoo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition-colors"
            aria-label="Twitter"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </Link>

          <Link
            href="https://github.com/nhdfr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </div>
  );
}
