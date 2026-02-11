# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an Astro-based blog/content site for "Clouded Hills" with support for essays, musings, updates, and miscellaneous content. The site uses Obsidian-style wiki links and is designed to publish content to cloudedhills.com.

## Development Commands

- `npm run dev` - Start development server at localhost:4321
- `npm run build` - Build production site to ./dist/
- `npm run preview` - Preview production build locally
- `npm run astro` - Run Astro CLI commands (e.g., `npm run astro check`)

## Content Architecture

### Content Collections

Content is organized in `src/content/` using Astro's content collections:

- **essays/** - Long-form essays with required fields: title, description, pubDate, optional: updatedDate, heroImage, colour
- **musings/** - Shorter thoughts/musings with same schema as essays plus optional noProof field
- **updates/** - Site updates/changelog entries with same schema as musings
- **misc/** - Miscellaneous pages with only title field required
- **images/** - Image assets referenced by content

All collections use the glob loader and support both Markdown (.md) and MDX (.mdx) files. Schemas are defined in `src/content.config.ts`.

### Content Files

Content files live in their respective collection directories and use frontmatter for metadata. The `pubDate` field is coerced to a Date object. Images should be stored in `src/content/images/` and referenced using Astro's image import system.

## Component Architecture

Components follow Atomic Design principles with a three-tier hierarchy:

- **Atoms/** (`src/components/Atoms/`) - Basic building blocks (e.g., AtomContentType, AtomStartHere)
- **Molecules/** (`src/components/Molecules/`) - Simple component groups (e.g., MoleculeListCardRow, MoleculeSquareCard)
- **Organisms/** (`src/components/Organisms/`) - Complex UI sections (e.g., OrganismEssayCard, OrganismMusingCard, OrganismUpdateCard)

Root-level components (`src/components/`) include shared elements like Header, Footer, BaseHead, and FormattedDate.

## Layouts

Layout files in `src/layouts/`:

- `layout.astro` - Base layout
- `Essay.astro` - Layout for essay content with hero image, date display, and prose styling
- `Musing.astro` - Layout for musing content

Layouts accept CollectionEntry data as props and render content using the `<slot />` component.

## Routing

Page routing in `src/pages/`:

- `index.astro` - Homepage
- `about.astro` - About page
- `essays/[...slug].astro` - Dynamic routes for all essays
- `musings/[...slug].astro` - Dynamic routes for all musings
- `updates/[...slug].astro` - Dynamic routes for all updates
- `essays/index.astro` - Essays listing page
- `musings/index.astro` - Musings listing page
- `updates/index.astro` - Updates listing page
- `rss.xml.js` - RSS feed generation

Dynamic routes use `getStaticPaths()` to fetch all posts from their respective collections and generate pages using the `[...slug]` pattern where slug matches the content file's id.

## Markdown Configuration

The project uses custom remark plugins configured in `astro.config.mjs`:

1. **@portaljs/remark-wiki-link** - Enables Obsidian-style wiki links (`[[Page Name]]`)
   - Uses `pathFormat: 'obsidian-absolute'`
   - Links resolve to `essays/` directory by default
   - Syntax: `[[Target Page]]` becomes a link to `/essays/Target Page`

2. **@microflash/remark-figure-caption** - Adds figure caption support to images

When creating or editing content, you can use wiki links to reference other essays.

## TypeScript Configuration

The project uses Astro's strict TypeScript preset with `strictNullChecks` enabled. Type definitions are auto-generated in `.astro/types.d.ts`.

## Site Constants

Site-level constants are defined in `src/consts.ts`:
- `SITE_TITLE` - "Clouded Hills"
- `SITE_DESCRIPTION` - "A place for essays, musings and notes on science, politics and life."

## Static Assets

- `public/` - Static files served as-is (e.g., clouded-hills.svg logo)
- `src/assets/` - Assets processed by Astro's asset pipeline
- `src/styles/` - Global CSS files (e.g., animate-logo.css)

## Content Creation Workflow

When adding new content:

1. Create a new .md or .mdx file in the appropriate collection directory
2. Add required frontmatter fields (title, description, pubDate)
3. Optionally add heroImage (import from src/content/images/)
4. Use wiki links to reference other essays: `[[Essay Title]]`
5. The page will be automatically generated via dynamic routing

No need to manually create route files - the `[...slug].astro` pattern handles all content rendering.
