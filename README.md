# Ed David Verzola — Native template rebuild (1.2.0)

This is the current rebuild from BrewedOps' original portfolio template. It uses the upstream Vite/React/TypeScript stack, layouts and styles rather than the earlier Next.js recreation. Version 1.1 remains separately preserved in `../portfolio-rebuild`; the untouched clone remains in `../portfolio-template`.

## Run

Node.js 24 and npm work on Apple Silicon/M5; no Docker or Intel-only tooling is required.

```sh
cd /Users/edv/Documents/Codex/2026-10-28/referenced-chatgpt-conversation-this-is-an/outputs/portfolio-native
npm ci
npm run dev -- --host 127.0.0.1 --port 3000
```

Open http://127.0.0.1:3000. Stop with Control-C.

```sh
npm run lint
npm run typecheck
npm run build
npm run preview -- --host 127.0.0.1 --port 3000
```

## Why the earlier version looked different

The earlier implementation recreated the template in Next.js and reused only a small part of its rail/styles. It replaced the native viewport home grid and mobile app layout with custom long-page sections. This version starts with the actual repository and retains its shell, bento grid, tool strip, mobile shelves, tab navigation, accessibility controls, theme transition and background renderer.

## Edit content

- `src/data/profile.ts`: identity, email, headline, photo, social links and mobile facts.
- `src/components/HomeBento.tsx`: the six native home-grid panels. Credentials/testimonials were replaced with honest cloud/contact content.
- `src/components/HomeMobile.tsx`: original phone shelf structure with relevant content.
- `src/components/ServicesGrid.tsx`: original three-step method, service grid and labeled illustrative workflow animation.
- `src/components/PersonalProjects.tsx`: self-initiated project cards using original grid classes.
- `src/components/PersonalAbout.tsx`: background and process using the original About layout.
- `src/components/PersonalContact.tsx`: original FAQ/form layout with real contact links. It opens an email draft; it does not send from this website.
- `src/components/PersonalDemo.tsx`: browser-only inquiry prototype carried forward.
- `src/styles/personalization.css`: the only added stylesheet. All upstream stylesheets remain intact; content, portrait rendering, monochrome accent, global icon-only theme control and sidebar collapse are adjusted here.

Native routes: `/`, `/projects`, `/services`, `/about`, `/contact`, `/demo`. `/showcase` also opens the sample. Unconfigured testimonial/legal pages are not linked or exposed as routes. The original startup intro overlay is disabled because navigation during it could leave the page hidden. No new animation system was introduced.

## Demo and contact limits

The demo uses synthetic browser-local data. Validation, duplicates, review gating and follow-up flags work locally. Alerts, response drafts, contact status and time passing are simulated. No live n8n, LLM, email or WhatsApp integration is connected. No results, certifications, testimonials or paid-client work are invented. The portfolio screenshot records the earlier v1.1 implementation.

Email: dverzola26@gmail.com. WhatsApp: +63 917 142 0582. LinkedIn and OnlineJobs.ph are the user-provided links. The contact form opens the visitor's email app; it does not verify delivery. No environment variables are needed. Do not configure `VITE_CONTACT_ENDPOINT` until a real delivery backend is approved and tested.

## Deployment, only after approval

No domain, deployment or remote repository was created. If later approved, use the Vite preset in Vercel, install `npm ci`, build `npm run build`, output `dist`. The included `vercel.json` provides SPA route fallback. Update final canonical/social URLs in `index.html` after a domain is chosen. Test direct navigation and refresh on every route. Check current hosting-plan terms before enabling a service.

For GitHub, create an approved empty repository, initialize this folder as its root after checking for parent repositories, then commit and push. The included CI checks Node 24 installation, lint and build. Do not push the untouched upstream clone or the older workspace by accident.

Before launch: record a captioned demo video, complete a private n8n integration before claiming it works end to end, review source screenshots and metadata, and verify mail composition on a real device.

## License and provenance

Upstream: https://github.com/brewed-ops/portfolio-template
Source commit: 03e13c9c83bffcb87b09c28ade105a88d685dfbc

Required Notice: Copyright (c) 2026 BrewedOps (https://github.com/brewed-ops/portfolio-template)

LICENSE is retained in full. Its additional permission allows your own portfolio to promote your own freelance services. It does not grant permission to resell the template or build paid portfolios for others. See UPSTREAM-README.md for the repository's original documentation and credits.

Compatible dependency updates were applied with npm audit fix; the resulting audit reported zero advisories. Small upstream lint fixes preserve behavior. No dependency major-version force upgrade was used.

## Toolkit and review corrections — 28 October 2026

The toolkit now lists Codex, Claude, n8n, Zapier and Azure. The Azure SVG is sourced from [Microsoft's documentation repository](https://github.com/MicrosoftDocs/entra-docs/blob/main/docs/identity-platform/media/common/logo_azure.svg); brand assets remain owned by their respective owners. Skill development is described on About rather than appended to toolkit names.

Review fixes: sidebar background follows its collapsed width; collapse button clears the portrait; footer clears the accessibility control; contact links use consistent library icons without duplicate social rows; WhatsApp is the primary contact link; native required-field/email validation is restored; mobile Home has a direct consultation CTA; page titles and route scroll/focus reset are updated; the demo uses an H1 and automation icon. The unused legacy thank-you URL redirects to Contact, removing its unsubstantiated delivery/reply promises.

## Work from another computer

GitHub repository: https://github.com/dverzola26/ed-verzola-portfolio (private).

### Browser development with Codespaces

1. Sign in to GitHub and open this private repository.
2. Choose **Code → Codespaces → Create codespace on main**. The committed dev-container config installs Node.js 24 and runs `npm ci`. Creating a codespace uses your GitHub Codespaces allowance; none is created by this upload.
3. In the Codespaces terminal, run:

```sh
npm run dev -- --host 0.0.0.0 --port 3000
```

4. Open the forwarded port 3000 in the **Ports** tab. Keep its visibility **Private**.
5. Edit the source, then run `npm run lint` and `npm run build`. Commit and push changes through Source Control. Stop the codespace when done.

For quick text edits, press `.` while viewing the repository to open github.dev. It can edit and commit files but does not run a live preview.

### Another local computer

Install Git and Node.js 24, authenticate to your private repository, then:

```sh
git clone https://github.com/dverzola26/ed-verzola-portfolio.git
cd ed-verzola-portfolio
npm ci
npm run dev -- --host 127.0.0.1 --port 3000
```

Before switching computers, commit and push your changes. In the other checkout, run `git pull --ff-only` before editing, then `npm ci` if dependencies changed. Use branches and pull requests for larger changes.

Dependencies, generated `dist`, logs, and local environment files are excluded from Git. The `.env.example` file contains only blank configuration. Uploading this repository does not deploy the website.
