# Swaroop Bevinal’s portfolio

Six pages share a navigation bar and a keyboard-accessible dock. The Home page introduces Swaroop and links to selected projects. About, Hobbies, Skills, Projects, and Contact also have their own URLs.

## Run locally

Use Node.js 24.22.1 (tested) and npm. In the project folder, run:

```sh
npm install
npm run dev
```

Open the address printed by Next.js. To reproduce the locked installation, use `npm ci`. To check the project and run its production version:

```sh
npm run lint
npm run typecheck
npm run build
npm start
```

## Edit the site

- `data/portfolio.ts` contains the biography, links, skill percentages, projects, and hobby selections.
- `app/components/` contains the sections. Each route in `app/` renders its section. The Home route is `app/page.tsx`.
- `app/globals.css` controls layout, color, typography, responsive behavior, and reduced motion.
- `public/images/` and `public/videos/` hold local artwork, posters and MP4s. Replace a video and its matching poster together. The silent music preview has one play/pause button. The anime clips autoplay muted and loop. With reduced motion enabled, playback starts manually.
- The contact form validates locally. It displays a preview message and offers a working email link.
- The project uses Next.js App Router, TypeScript, Tailwind CSS, Lucide icons, and locally served Inter.

One Piece and Naruto play local MP4s from `public/videos/` with matching posters from `public/images/`. The music clip is an original silent visual for “4 Raws” by EsDeeKid. To show the approved portrait on About, upload it to `public/images/` as `swaroop.jpg`, `swaroop.jpeg`, `swaroop.png`, or `swaroop.webp` and rebuild. The page uses its gradient until that file is present. Student Support System uses the supplied repository URL and a title-based summary. Its implementation and technologies could not be verified.

## Publish and update

Import [derpbutpro/swaroop_portfolio](https://github.com/derpbutpro/swaroop_portfolio) into Vercel. Select the Next.js preset, keep the repository root as the project directory, choose `main` for production, and select Deploy. No environment variables are required. To update the deployed site, edit the content, run the checks above, and push the verified changes to the connected production branch.
