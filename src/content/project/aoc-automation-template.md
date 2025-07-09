---
title: "Advent of Code Automation (TypeScript)"
description: "A lightweight, feature-rich TypeScript template for automating Advent of Code participation fetch challenges, inputs, and submit solutions without leaving your terminal."
date: "2024-06-10"
status: "completed"
technologies:
  - "TypeScript"
  - "Node.js"
  - "CLI"
  - "Web scraping"
category: "web and terminal automation"
github: "https://github.com/nturf/AOC.git"
featured: true
features:
  - "Pulls Advent of Code challenges by year and day"
  - "Organizes solutions in separate directories for each year"
  - "Fetches puzzle input files locally for easy test runs"
  - "Downloads the question description as a markdown file"
  - "Automatically fetches Part 2 as soon as Part 1 is submitted and accepted"
  - "CLI-driven: no need to open a browser"
  - "Handles answer submission and prevents duplicate submissions"
  - "Lightweight, minimal dependencies, and easy to set up"
learning:
  - "Efficient CLI and web automation"
  - "Handling dynamic content fetching and file organization"
  - "Integrating with external web services (AOC)"
challenges:
  - "Pulling the challenge content and saving as markdown was tricky due to web scraping and formatting"
  - "Automating the fetch of Part 2 immediately after Part 1 is accepted"
  - "Preventing post-flooding: ensuring submissions for Part 2 don't re-trigger Part 1 submission logic"
---
