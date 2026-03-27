# Limitless Church Homepage Concepts (Astro)

A lightweight strategy mockup site for exploring three different homepage directions for **Limitless Church** (Nixa, Missouri).

This project is intentionally:
- static and fast
- mobile-friendly
- video-free on the homepage
- built for presentation and discussion (not a production rebuild)

## Concept Pages

- `/` - Concept selector and explainer
- `/concept-1-familiar` - Familiar direction (warm, safe, clearer hierarchy)
- `/concept-2-elevated` - Elevated direction (mission-shaped storytelling)
- `/concept-3-bold` - Bold direction (distinct, modern, still pastoral)

## Local Development

```bash
npm install
npm run dev
```

Then open the local Astro URL shown in the terminal (usually `http://localhost:4321`).

## Production Build

```bash
npm run build
npm run preview
```

Build output is generated in `dist/`.

## GitHub Pages Deployment Notes

This project is configured for static output in `astro.config.mjs` and includes automatic base-path logic for GitHub Actions:

- If deployed as a **project site** (`username.github.io/repo-name`), base defaults to `/<repo-name>/`.
- If deployed as a **user/org site** (`username.github.io`), base defaults to `/`.

You can override explicitly with environment variables:

- `SITE` (example: `https://yourname.github.io`)
- `BASE` (example: `/your-repo/`)

### Example GitHub Actions build step

```bash
npm ci
npm run build
```

Publish the `dist/` folder to GitHub Pages via your preferred workflow.

## Project Structure

```text
src/
  components/
    CTAGroup.astro
    Footer.astro
    Header.astro
    Hero.astro
    InfoCard.astro
    SectionHeading.astro
  layouts/
    BaseLayout.astro
  pages/
    index.astro
    concept-1-familiar.astro
    concept-2-elevated.astro
    concept-3-bold.astro
  styles/
    global.css
```
