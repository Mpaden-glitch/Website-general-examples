# Website Strategy Showcase (Astro)

A brand-neutral strategy showcase for exploring homepage directions for churches, ministries,
nonprofits, schools, and other mission-driven organizations.

This project is intentionally:
- static and fast
- mobile-friendly
- built as a discovery and strategy tool
- focused on direction comparison, not a live organizational site

## Pages

- `/` - Homepage concept overview with three immersive direction studies
- `/website-strategy-catalog` - Expanded strategic catalog and decision framework
- `/concept-1-familiar` - Warm / Grace-Filled direction study
- `/concept-2-elevated` - Grounded / Earth-Toned direction study
- `/concept-3-bold` - Raw Contrast / High Contrast Modern direction study

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

## Cloudflare / Static Deployment

This project uses Astro static output and is deployment-safe for static hosts including Cloudflare Pages.

## Project Structure

```text
src/
  components/
    catalog/
      StrategyBlock.astro
    Footer.astro
    Header.astro
  layouts/
    BaseLayout.astro
  pages/
    index.astro
    website-strategy-catalog.astro
    concept-1-familiar.astro
    concept-2-elevated.astro
    concept-3-bold.astro
  styles/
    global.css
```
