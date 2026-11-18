# Swaroop Bevinal Portfolio

A responsive personal portfolio built with Next.js App Router, React, TypeScript, Tailwind CSS, and ESLint. It has separate Home, About, Hobbies, Skills, Projects, and Contact pages. The contact form validates locally and shows a preview message.

## Run locally

Tested with Node.js 24.22.1.

```bash
npm install
npm run dev
```

Open the address printed by Next.js. For a production build, run `npm run build`, followed by `npm run start`. Check code with `npm run lint` and `npm run typecheck`.

## Where to edit

- `data/portfolio.ts` holds the name, biography, contact links, skills, page links, and project details.
- `app/page.tsx` is the Home page. Each other route has its own `app/<page>/page.tsx`.
- `app/components/` contains the page sections and shared navigation.
- `app/globals.css` contains the visual design and responsive styles.
- `public/images/` and `public/videos/` are for approved local media.

To add an About portrait, place an approved image under `public/images/` and replace the abstract portrait treatment in `app/components/About.tsx` with a responsive image. To add hobby videos, place approved files in `public/videos/` and add user initiated native video controls. Use `preload="none"` to limit initial downloads and include poster images if available.

The original About portrait file and approved anime or music video files were not attached. Project descriptions are brief summaries based on their titles. Project technology tags and screenshots await verification or user supplied details. The skill percentages and public contact links come from Swaroop.

## GitHub and deployment

Repository: `https://github.com/derpbutpro/swaroop_portfolio`.

To deploy, import the GitHub repository in Vercel, select Next.js, and deploy. After editing the portfolio, commit and push the changes to GitHub, then use the new Vercel deployment from that push.
