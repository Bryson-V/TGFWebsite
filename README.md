# Todu Guam Foundation — Website

A Next.js rebuild of toduguam.com, migrated off WordPress/Elementor. This
first pass covers the **homepage only** — the architecture is built so the
rest of the site (About, Programs, Contact, Blog, etc.) can be added as
more page folders under `app/`, following the same pattern.

## Getting started

You'll need [Node.js](https://nodejs.org) 18.18 or newer installed.

```bash
npm install
npm run dev
```

Then open http://localhost:3000. Every save hot-reloads in the browser.

To build for production:

```bash
npm run build
npm start
```

This project has never been installed or run yet — it was written by hand
in an environment with no internet access, so `npm install` here will be
the first real test of it. If something doesn't compile, the most likely
culprits are a typo'd import path or a JSX syntax slip; the error message
from `next dev` will point at the exact file and line.

## How the project is organized

```
app/                    Pages (Next.js "App Router" — one folder per route)
  layout.js             Wraps every page: fonts, <Header>, <Footer>
  page.js               The homepage — just lists which sections to render
  globals.css           Design tokens (colors, fonts, spacing) + resets

components/
  layout/                Header, Footer — used on every page
  sections/               One component per homepage section
                          (Hero, ProgramsGrid, NewsGrid, etc.)
  ui/                     Small reusable pieces (Button, Container,
                          SectionHeading) used across multiple sections

content/
  site-data/*.json        Structured content: nav links, program list,
                          impact stats, footer links, press mentions
  news/*.md                One file per news article

lib/
  content.js               The only file that reads from the filesystem.
                          Turns the markdown files into data components
                          can use.

public/images/            All site images, organized by purpose
```

**The rule of thumb:** page structure and behavior live in `.jsx` files
under `components/`; the words and numbers that appear on the page live in
`content/`. If you're changing what something *says*, you want a file in
`content/`. If you're changing how something *looks or behaves*, you want
a file in `components/`. See `content/README.md` for a plain-language
guide aimed at non-developers editing content.

## Styling approach

Each component has its own `ComponentName.module.css` file sitting right
next to it. These are [CSS Modules](https://nextjs.org/docs/app/building-your-application/styling/css-modules) —
plain CSS, scoped automatically to that one component so styles never leak
between sections and collide. There's no CSS framework (no Tailwind, no
Bootstrap) — just organized, ordinary CSS, on purpose, to keep the
learning curve flat for whoever works on this next.

Global design tokens (brand colors, font, spacing, border radii) live as
CSS variables in `app/globals.css` — e.g. `var(--color-primary)`. Change a
token there and it updates everywhere it's used.

## Adding a new page

1. Create a folder under `app/` matching the URL you want, e.g.
   `app/about/page.js` for `/about`.
2. Export a default component from `page.js`. It automatically gets the
   shared `<Header>`/`<Footer>` from `app/layout.js`.
3. Build out the page using existing components from `components/ui/` and
   new section components under `components/sections/` as needed.
4. Update `content/site-data/nav.json` to point the relevant nav link at
   your new internal path instead of the live toduguam.com URL.

## Adding a new reusable component

Anything used in more than one place (a card style, a button variant,
etc.) belongs in `components/ui/`. Anything specific to one section of one
page belongs in `components/sections/`. Give it its own `.module.css` file
and a short comment at the top explaining what it renders and where its
content comes from — every existing component follows that pattern, so a
new file will look at home next to the others.

## What's not built yet (known gaps in this first pass)

- **Individual news article pages** (`/news/[slug]`) — the homepage links
  to these, but the route doesn't exist yet. Building
  `app/news/[slug]/page.js`, which reads a single article via a
  `getNewsBySlug()` function in `lib/content.js` (not written yet — you'd
  add it alongside the existing `getAllNews()`), is the natural next step.
- **All other pages** (About, Programs, Contact, Careers, Volunteer,
  FAQ, Privacy, Terms, etc.) — for now, every nav and footer link that
  isn't the homepage points at the equivalent page on the live
  toduguam.com site, so nothing is a dead link. As each page gets rebuilt
  here, swap its link in `content/site-data/nav.json` or
  `content/site-data/footer.json` to the new internal path.
- **Newsletter signup** — the form UI works, but doesn't send anywhere.
  See the comment at the top of `components/sections/NewsletterSignup.jsx`
  for how to connect it to a real email service.
- **Cookie consent banner** — the old site's cookie consent plugin was
  intentionally left out of this pass to keep scope focused on the
  architecture. If GDPR/cookie compliance is needed, that's worth
  scoping as its own small task.
- **Content is placeholder in places** — see `content/README.md` for
  what still needs real copy from the team.

## A couple of things worth double-checking with the team

- The original site's homepage text says "Todu Guam's 5 main programs,"
  but lists 6 program cards. I carried the copy over exactly as written
  rather than editing it myself — worth a quick look.
- The footer's second phone number's display text (`671 - 649 - 8638`)
  and its click-to-call link (`671 - 989 - 0731`) don't match on the live
  site. Also carried over as-is in `content/site-data/footer.json`.
