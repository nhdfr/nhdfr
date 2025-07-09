import Link from "next/link"
import React from "react"
import { Youtube } from "lucide-react"

const InfoCard = () => {
    return (
        <div className="container mx-auto px-4 py-8 max-w-4xl">
            <div className="rounded-lg border bg-background/50 backdrop-blur-md shadow-sm">
                <div className="flex flex-col space-y-1.5 p-6">
                    <h3 className="text-3xl leading-none font-medium">whoami</h3>
                </div>
                <div className="p-6 pt-0 space-y-4">
                    <p className="text-foreground text-sm">
                        Hey, I'm generally working on... stuff.<br/>
                        Red warnings? Nah, they're just part of the family now. I've made peace with them accept your fate, right?
                    </p>
                    <p className="text-foreground text-sm">
                        Most of my power comes from a majestic mountain of config files, weird scripts, and the all-powerful gods of <span className="font-bold">VIM</span> and <span className="font-bold">Terminal</span>. Basically, I type things into a black box and hope magic happens. (It usually does. Usually.)
                    </p>
                    <p className="text-foreground text-sm">
                        I also mess around with hardware microcontrollers, home servers,whatever looks like it might catch fire if I push it too far.
                    </p>
                    <p className="text-foreground text-sm flex items-center gap-2">
                        Oh, and I’ve started doing <Link href="http://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="underline font-bold inline-flex items-center hover:text-red-600">YouTube <Youtube className="w-5 h-5 ml-1 text-foreground hover:text-red-600 transition-colors" /></Link> things lately. Because why not?
                    </p>
                </div>
            </div>
        </div>
    )
}

export default InfoCard

