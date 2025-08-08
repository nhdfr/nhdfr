---
title: "Vim Horizontal Motions: Mastering Efficient Navigation"
description: "Vim horizontal motions, buffer/window management, and plugin philosophy."
date: "2024-06-10"
tags:
  - vim
  - navigation
  - productivity
featured: false
draft: false
---

Vim is fast when you stay on the home row. This is a short, practical guide to the horizontal motions I actually use daily—no fluff, just what helps you move quicker.

## The essentials (you’ll use these constantly)
- Line navigation:
  - `_` → jump to first non‑blank on the line
  - `$` → end of line
  - `0` → absolute start of line
- Character jumps (the real speed boost):
  - `f<char>` / `F<char>` → jump forward/backward to `<char>`
  - `t<char>` / `T<char>` → like `f/F` but stop before `<char>`
  - `;` and `,` → repeat the last jump forwards/backwards
- Combine with operators:
  - `d` + motion → delete by motion (e.g. `d$`)
  - `y` + motion → yank by motion (e.g. `yT=` up to but not including `=`)
  - `v` + motion → visual select by motion

Quick example: `dtw` deletes up to (but not including) the next `w`. It’s precise and feels great once it’s in your fingers.

## Insert and append, without leaving the line
- `I` → insert at start of line
- `A` → append at end of line
- `o` / `O` → open a new line below/above and enter insert mode

## Buffers and windows (in one minute)
- A buffer is just an in‑memory file. A window is a view onto a buffer.
- You can show the same buffer in multiple windows; edits stay in sync.
- Move between buffers with `:bnext` / `:bprev`. Close a buffer from memory with `:bd` (closing a window doesn’t remove the buffer).

## Plugins I actually keep
- Telescope → a flexible fuzzy finder I reach for daily.
- Harpoon → quick file marks for jumping around a project.

My rule: add plugins only when a problem repeats. Prefer a small, boring setup and a few well‑chosen keymaps (e.g. `<leader>pv` for quick file nav).

## Takeaways
- Learn `f/t` and friends; they’re the biggest speedup.
 - Let operators do the work: `d`/`y`/`v` + motion.
- Keep your setup lean so your brain remembers the few things that matter.

That’s it. Next up: vertical motions and marks—and maybe a tiny script for the repetitive stuff you do every day.
