# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static HTML portfolio website for Nguyen Huong Tran, a data analyst/statistician. The site is built on the **Editorial** theme by HTML5 UP and has no build system, package manager, or server-side code.

## Development

There are no build steps. Open any `.html` file directly in a browser to preview. The compiled CSS (`assets/css/main.css`) is pre-built and committed — the SCSS source lives in `assets/sass/` but there is no build pipeline configured in this repo. If you need to edit styles, edit `assets/css/main.css` directly, or set up a Sass compiler (`sass assets/sass/main.scss assets/css/main.css`).

## File Structure

- `index.html` — main portfolio page (projects, bio, contact)
- `index AI.html` — AI-assisted version of the portfolio
- `generic.html` / `elements.html` — template reference pages from the HTML5 UP theme
- `assets/css/main.css` — compiled stylesheet (edit this for style changes, not the SCSS)
- `assets/sass/` — SCSS source organized into `base/`, `components/`, `layout/`, `libs/`
- `assets/js/main.js` — handles sidebar toggle, scroll locking, and menu accordion via jQuery
- `images/` — project screenshots, videos (`.mp4`), and static assets
- `git-filter-repo/` — a copy of the git-filter-repo tool; unrelated to the portfolio itself

## Architecture Notes

- The layout is a two-column editorial layout: a fixed left sidebar (`#sidebar`) and scrollable main content (`#main`). The sidebar collapses on screens ≤1280px wide.
- Sidebar scroll-lock logic in `main.js` pins the sidebar inner content as the user scrolls, syncing heights via `resize.sidebar-lock` and `scroll.sidebar-lock` jQuery events.
- Breakpoints are defined in both `assets/js/main.js` (via `breakpoints.min.js`) and `assets/sass/libs/_breakpoints.scss`. They must stay in sync if changed.
- Projects are listed as `<article>` elements inside a `.posts` grid in `index.html`. Videos use native `<video>` tags; image-linked projects use `<a class="image">` wrappers.
- FontAwesome icons are self-hosted in `assets/webfonts/` and loaded via `assets/css/fontawesome-all.min.css`.
