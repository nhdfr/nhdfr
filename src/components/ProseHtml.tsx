"use client"

import React, { useEffect, useRef } from "react"

interface ProseHtmlProps {
  html: string
}

export default function ProseHtml({ html }: ProseHtmlProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const pres = Array.from(container.querySelectorAll<HTMLPreElement>("pre"))
    pres.forEach((pre) => {
      if (pre.querySelector("button[data-copy]") != null) return

      pre.style.position = pre.style.position || "relative"

      const button = document.createElement("button")
      button.type = "button"
      button.setAttribute("data-copy", "true")
      button.className = "code-copy-btn absolute right-2 top-2 rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs text-foreground/80 hover:bg-white/10 transition-colors"
      button.textContent = "Copy"

      button.addEventListener("click", async () => {
        const code = pre.querySelector("code")
        const text = code?.textContent ?? pre.textContent ?? ""
        try {
          await navigator.clipboard.writeText(text)
          const original = button.textContent
          button.textContent = "Copied"
          button.classList.add("bg-white/10")
          setTimeout(() => {
            button.textContent = original
            button.classList.remove("bg-white/10")
          }, 1200)
        } catch {
          // ignore
        }
      })

      pre.appendChild(button)
    })
  }, [html])

  return <div ref={containerRef} dangerouslySetInnerHTML={{ __html: html }} />
}


