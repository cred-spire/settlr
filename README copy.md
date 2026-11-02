# Settlr website (SvelteKit)

Built from the Paper file **Payz_website** — five pages, desktop and mobile.

| Route | Paper artboard |
|---|---|
| `/` | Payz — Home (Desktop) / Mobile — Home |
| `/product` | Payz — Product |
| `/industries` | Payz — Industries |
| `/early-access` | Payz — Early access |
| `/pricing` | Payz — Pricing |

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
npm run build && npm run preview
```

Requires Node 18.13+. Svelte 5 (runes) + SvelteKit 2, no CSS framework.

## Where things live

- `src/app.css` — design tokens (colours, type scale, buttons) taken from the Paper file
- `src/lib/site.ts` — nav, footer links and image URLs
- `src/lib/components/` — Header (with mobile menu), Footer, CtaBand, EmailCapture, Logo, Eyebrow, Check
- `src/routes/+layout.svelte` — header, shared "Work smarter" CTA band and footer on every page

## Before launch

- **Images** point at the Paper asset URLs. Download them into `static/images/` and update `src/lib/site.ts` so the site doesn't depend on Paper.
- **Email forms** (`EmailCapture.svelte`) validate but don't send anywhere yet — wire the `submit` handler to your waitlist/CRM.
- **Placeholder links** (`href="#"`): Sign in, Trust center, Careers, Blog, Contact, Privacy, Terms, SLA, LinkedIn, X.
- **Pricing**: the design shows yearly rates (₹7,999 / ₹15,999). Monthly is calculated as yearly × 12 ÷ 10 to match "2 months free" — adjust in `src/routes/pricing/+page.svelte`.
- **FAQ**: only "Do you charge per user?" has an answer in the design; the other four answers are placeholder copy.
- **Founder section** still has "Founder name" and the placeholder company address from the design.
- `adapter-auto` is installed; swap for `adapter-vercel`, `adapter-node` or `adapter-static` for your host.
