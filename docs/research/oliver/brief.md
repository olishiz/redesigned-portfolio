# Oliver Sim portfolio

Built from https://github.com/JCodesMore/ai-website-cloner-template (MIT).
Visual reference: https://shud.in/ (observed 21 October 2026).
Content: supplied August 2026 resume, PDF link annotations, and https://olishiz.github.io/.

## Routes

| Reference / content | Local route | File |
| --- | --- | --- |
| shud.in about composition; Oliver bio | / | src/app/page.tsx |
| Resume employment, education, certifications | /experience/ | src/app/experience/page.tsx |
| shud.in/projects text layout; Oliver projects | /projects/ | src/app/projects/page.tsx |
| Portfolio public contact information | /contact/ | src/app/contact/page.tsx |

Shared files: src/app/layout.tsx, src/app/globals.css, src/components/sites/oliver/navigation.tsx.

## Visual rules

Off-white #fcfcfc. Text #4a515b, headings #3b4149, navigation #8c95a1.
Desktop body inset 56px; 64px navigation + 56px gap; main max-width 672px including 56px left gutter. Content starts at x232px. Body Inter variable weight 440, optical size 32, 16px/28px. H1 stays 16px at weight 600. Navigation Lora italic weight 480. Fine vertical border #d8dbdfb3. Paragraph gap 28px.
Breakpoints follow the reference: below 420px horizontal navigation, 24px body inset, top separator, 14px/24px body. 420px sidebar; 640px 40px insets and 15px/28px type; 768px 56px insets and 16px/28px type.

## Assets

| Source | Destination |
| --- | --- |
| shud.in/_next/static/immutable/media/InterVariable-s.p.17djzg046q86k.woff2 | public/sites/oliver/fonts/inter-variable.woff2 |
| shud.in/_next/static/immutable/media/LoraItalicVariable-s.p.0uj-ui__o36w7.woff2 | public/sites/oliver/fonts/lora-italic-variable.woff2 |
| User's uploaded resume | public/oliver-sim-resume.pdf |

Only the open source typefaces are reused. Oliver's identity, biography, project descriptions, monogram, and destinations replace the reference's personal content. No reference production JS is bundled. No invented posts, guestbook entries, or project URLs.

## Intentional differences

Work and Contact replace Thoughts and Guestbook because supplied content supports those pages. Projects use text titles rather than another creator's project logos. No guestbook backend or reference article pages. All visible navigation is implemented locally; client project/social links retain real external destinations. Light appearance follows the inspected reference.

## Verification

Production Next.js build and TypeScript passed. ESLint passed. Browser navigation verified for About, Projects, Work, and Contact. Desktop at 1363x936: h1 x232/y56, content width616, paragraph y112/196/336, matching the source's observed geometry exactly. Mobile layouts visually inspected in real iframe viewports at 320px, 390px, and 420px; 390px has document scrollWidth390 and content width342. Source mobile behavior was derived from its published CSS; a source mobile screenshot was unavailable. Browser extension logged metadata errors; no application errors observed. Temporary responsive QA page removed before publication.

Run locally with npm ci and npm run dev. npm run build generates out/.

## Copy and employer logo refinement

Refined About, Work, Projects, and Contact copy for a concise professional voice. Employment claims and metrics remain sourced to the supplied resume. Company marks appear as decorative 24px images beside the accessible company headings; all are hosted locally.

Logo provenance:
- Maybank: https://www.maybank2u.com.my/static/img/favicon.ico (converted faithfully to PNG).
- EDAG: https://www.edag.com/_assets/4caf6c9308ed0c7682dc48ffb52a1bd1/Icons/touch_icon_big.png
- Etiqa: https://www.etiqa.com.my/favicon.ico (converted faithfully to PNG).
- iFAST: https://www.ifastcorp.com/ifastcorp/images/ifast-corporation-logo.png

Desktop Work page visually checked with real company assets.
