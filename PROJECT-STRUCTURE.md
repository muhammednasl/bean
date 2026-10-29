# JavaScript project structure

This refactor organizes the existing restaurant website into reusable components. It is intended to preserve the original design: existing page copy, image assets, layout wrappers, Tailwind utility classes, colors, typography, breakpoints, and section order are retained. No intentional visual redesign was made.

## Structure

- `src/routes/`: TanStack Router route pages and page metadata.
- `src/components/layout/`: shared `Nav`, `Footer`, `Shell`, `PageHeader`, `Btn`, and `Logo` components.
- `src/components/sections/`: homepage `HeroSection`, `StorySection`, `FeaturedDishesSection`, and `TestimonialsSection`.
- `src/components/ui/`: existing reusable UI primitives (retained).
- `src/lib/dishes.js`: image and dish data.
- `src/assets/`: existing restaurant images (retained).
- `src/styles.css`: original design tokens and global styles (retained).

`src/components/site.jsx` remains as a compatibility barrel, so the other route pages can keep importing shared components from it.

## Run

Install dependencies with the package manager you use for this project, then run `npm run dev` (or `bun install` and `bun run dev` if using Bun).

The project was reorganized without changing the visual design intentionally. Run `npm run build` and compare screenshots in your browser to confirm rendering in your local environment.

The content sections for Menu, Gallery, About, Location, and Contact are also separated into dedicated components in `src/components/sections/`.
