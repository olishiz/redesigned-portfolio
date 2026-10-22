# Oliver Sim — Portfolio

A minimal Next.js 16 / React 19 personal portfolio. Based on JCodesMore's MIT-licensed [ai-website-cloner-template](https://github.com/JCodesMore/ai-website-cloner-template), with layout and typography inspired by [Shu Ding](https://shud.in/). Content is Oliver's own.

## Run

Requires Node.js 24 or newer.

```sh
npm ci
npm run dev
```

Visit http://localhost:3000. Run `npm run check` for lint, TypeScript, and production build. The build exports to `out/`. Pages: `/`, `/experience/`, `/projects/`, `/contact/`. Resume: `/oliver-sim-resume.pdf`.

## Deploy to Vercel

Import as a Next.js project, or run `npx vercel`. Build command: `npm run build`. Static output: `out`. No environment variables required.

Edit pages under `src/app/`; shared styles are in `src/app/globals.css`, navigation in `src/components/sites/oliver/navigation.tsx`.

See `docs/research/oliver/brief.md` for reference measurements, routes, and deliberate differences. Inter and Lora are open source fonts, with licenses included under `public/sites/oliver/fonts/`.

## Clone

```sh
git clone https://github.com/olishiz/redesigned-portfolio.git
cd redesigned-portfolio
npm ci
npm run dev
```
