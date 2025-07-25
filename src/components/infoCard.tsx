import React from "react"

const InfoCard = () => {
    return (
        <div className="container mx-auto px-4 py-8 max-w-4xl">
            <div className="rounded-lg border bg-background/50 backdrop-blur-md shadow-sm">
                <div className="flex flex-col space-y-1.5 p-6">
                    <h3 className="text-3xl leading-none font-medium">Hey, I’m Dex!</h3>
                </div>
                <div className="p-6 pt-0 space-y-4">
                    <p className="text-foreground text-sm">
                        Welcome to my playground for ideas that might someday catch fire (sometimes literally).
                        <br />
                        Here are some of the things I do here:
                    </p>
                    <ul className="text-foreground text-sm list-disc list-inside space-y-1">
                        <li>Deep dives into my favorite tools (VIM, Linux, TypeScript, and more)</li>
                        <li>Automation scripts, dotfiles, and productivity hacks</li>
                        <li>Showcases of my bigger projects</li>
                        <li>Honest write-ups about what works, what breaks, and what I learn along the way</li>
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default InfoCard

