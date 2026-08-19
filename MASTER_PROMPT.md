# Master Prompt — Rose Malar Developmental Co-operative Society Limited Website

This is the build spec for the RMDCS site. It exists so the site gets built once, correctly, from real content — not regenerated from vague instructions each time. Follow it as-is when implementing.

## 1. What this site is

A public informational website for **Rose Malar Developmental Co-operative Society Limited (RMDCS)** — a registered Multi-State Cooperative Society under the Ministry of Agriculture and Farmers Welfare, Government of India. It is not a marketing/SaaS site and not a government registry listing — it's a cooperative society's own site: members, deposit/loan products, leadership, and how to reach a branch. Tone should read as institutional and trustworthy, not flashy.

Stack already scaffolded in this repo: **React 19 + Vite**, plain CSS (no Tailwind installed — keep it plain CSS or CSS Modules, don't add a utility framework).

## 2. Reference sites for the "looks manually built, not AI" requirement

The client has been explicit: this site must **not read as AI-generated** — it should look like a person sat down and built a normal cooperative/Nidhi financial institution website. Two sites were given as the benchmark for that feel:

- **iccsl.in** — traditional, template-style corporate layout. Horizontal nav with dropdowns, centered logo, support phone number visible in the header. Products shown as a plain 3-column card grid with uniform, conventionally-photographed images (not stock-abstract AI imagery). Neutral white/gray palette, dark text, accent color reserved for "Know More" buttons only. Generous but plain whitespace, predictable grid, no scroll animation, no gradients, no glassmorphism, no floating 3D elements. Reads as disciplined and slightly plain — that plainness is the point.
- **kovaitechnidhi.com** — a Nidhi company (deposits/loans, same business shape as RMDCS). Conventional layout built on Bootstrap: standard navbar, hero, product cards, footer with address/contact. Inter font, one accent color (`#ff8500`) used sparingly for active links/buttons, a dark navy secondary color, otherwise default neutral grays. No exotic animation, no AI-tell visual flourishes — just a normal business site.

**What to take from both, concretely:**
- Conventional structure: header with logo + horizontal nav (+ phone number visible), hero, card-grid product sections, plain footer with real contact info. Nothing experimental in the layout.
- One accent color used sparingly (ours is `--blue-500`, see below) — not a rainbow of gradient accents.
- Product/rate information presented as plain cards and tables, not "feature tiles" with icon-in-gradient-circle treatments.
- Flat, plain sections — no glassmorphism, no floating/tilted cards, no blurred gradient blobs behind content, no oversized rounded-everything "SaaS landing page" look.
- Photography (once supplied) should look like real branch/staff photos, not abstract stock/AI art — this is why the current placeholder `hero.png` (an abstract purple 3D shape) must be replaced before launch.
- It's fine — expected, even — for the layout to feel a little plain and utilitarian rather than maximally polished. That plainness is what reads as "a person built this," not a design system.

## 3. Design system

### Colors (navy blue + white — supersedes the earlier green palette)

**2026-08-19 update:** the client asked for a full theme redesign away from green, toward the white + navy-blue palette actually used on kovaitechnidhi.com (their own site's real brand colors: `#0b0041` navy, `#ff8500` orange accent — reference for palette *direction* only, not copied verbatim: RMDCS keeps a single blue accent, no orange). All section layouts were also rebuilt (pill buttons, accent-bordered cards, restructured hero, underline nav) rather than just recolored, per the "totally redesign, not a reskin" instruction. Content/copy is unchanged.

| Token | Hex | Use |
|---|---|---|
| `--blue-950` | `#071a3d` | Deepest navy — header top bar, footer background |
| `--blue-900` | `#0c2b63` | Primary brand navy — headings, hero background, primary card/nav accents |
| `--blue-700` | `#14418c` | Hover/active state for primary blue elements |
| `--blue-500` | `#2f6fed` | Bright interactive blue — links, buttons, focus rings, accent borders/dots |
| `--blue-100` | `#eaf1fd` | Light blue tint — table row hover, subtle highlight |
| `--white` | `#ffffff` | Primary background |
| `--surface` | `#f5f8fd` | Alternate section background (very light blue-tinted off-white) |
| `--text` | `#1c2433` | Body text |
| `--text-muted` | `#626c7c` | Secondary text, captions, table footnotes |
| `--border` | `#dde4f0` | Card/table borders, dividers |

No orange/gold accent — single blue accent (`--blue-500`) only. Buttons are pill-shaped (`--radius-pill`); cards carry a `3px` left accent border in `--blue-500` plus a soft shadow (`--shadow-card`) instead of a flat border. Breakpoints are mobile-first: base styles target `xs` (<576px), then `sm` (≥576px), `md` (≥768px), `lg` (≥992px) — every component stylesheet follows this same set of breakpoints.

### Typography

- **Poppins** (Google Fonts), weights 400/500/600/700.
- Load via `@import` in `index.css` or a `<link>` in `index.html` — self-hosted or Google Fonts link, not a random CDN.
- Headings: 600/700 weight. Body: 400. Nav/buttons: 500.
- Real fallback stack: `'Poppins', system-ui, -apple-system, 'Segoe UI', sans-serif`.

### Layout & spacing

- 8px spacing rhythm (8/16/24/32/48/64...), not arbitrary pixel values scattered around.
- Max content width ~1140–1200px, centered, with sensible side padding on mobile.
- Cards/tables: subtle border (`--border`) + very light shadow, not heavy floating-card glassmorphism everywhere.

## 4. Animation — restrained, not AI-slop

The user was explicit: **smooth but minimal**, and the site must read as if a person hand-built it, not as an AI-generated demo. Concretely:

**Do:**
- Fade/slide-up on scroll for section entrances: ~16–20px translate, 400–500ms, ease-out, using `IntersectionObserver` — trigger once, not on every scroll re-entry.
- Simple hover transitions on buttons/links/cards: color/background/box-shadow, 150–200ms ease.
- Mobile nav open/close: simple slide or fade, ~200ms.
- Respect `prefers-reduced-motion: reduce` — disable/shorten all of the above when set.

**Don't:**
- No parallax scrolling, no scroll-jacking, no 3D tilts/flips, no particle/blob backgrounds, no auto-playing motion carousels, no staggered "AI showcase" cascade animations on every element, no animated gradients, no confetti/emoji.
- No animation library (Framer Motion, GSAP, AOS, etc.) — plain CSS transitions + a tiny IntersectionObserver hook is enough for this scope and keeps the code plain.

## 5. Code style — must read as hand-written

- No code comments explaining *what* the code does (names should already say that); at most a rare one-liner for a genuinely non-obvious rule (e.g. an interest-rate exception straight from the docx).
- No emoji anywhere in UI copy or code.
- Semantic HTML5 (`header`, `nav`, `main`, `section`, `article`, `footer`) — not endless generic `div`s.
- Plain, direct CSS — real class names (`.hero`, `.rate-table`, `.member-card`), not a utility-class soup and not BEM-ceremony beyond what's needed.
- No filler "AI tells": no fake stat counters, no "trusted by" logo strips, no stock lorem ipsum, no generic hero phrases like "Empowering Your Financial Future™"-style AI copy — use the society's own language from the source document below.
- Icons: minimal, only where they add clarity (nav, contact info). No colorful icon-in-a-circle grids on every section.

## 6. Site structure (from the source document's nav)

`Home · Members · Products · Loans · Our Leadership Team · Archive · Contact Us`

### Home
- Hero with society name + short tagline.
- About RMDCS: registered Multi-State Cooperative Society, Ministry of Agriculture & Farmers Welfare, Government of India. Founded by Late Shri R. Bhakther Solomon under the Multi-State Co-operative Societies Act, 2002, established in 2008. Since 2018, functioning under the Chairmanship of Mrs. Prabala Jabeegara Ross.
- Vision: *"Promotion of economic and social well-being of its members by way of self-help and mutual assistance."*
- Mission line: RMDCS aims to be a one-stop financial services provider for members, alongside promoting entrepreneurship, financial literacy, wealth creation and management, and livelihood development.

### Members
**Who can be a member** (eligibility, from the source document verbatim intent):
a. An individual competent to contract under the Indian Contract Act, 1872 (Section 11).
b. Any Multi-State Co-operative Society or any Co-operative Society.
c. Such class(es) of persons or Association of Persons as permitted by the Bye-Laws and Subsidiary Rules, per the Society's nature and activities.
d. A person who resigned/withdrew from membership, once at least one year has lapsed since resignation/withdrawal.
e. A past member expelled from the Society, once at least one year has lapsed since expulsion.

Membership is open to anyone residing within the Society's area of operation who needs its services and whose profession/interest doesn't conflict with the Society's or overlap an existing similar membership.

Include a note: *"Membership form available — download, print, and submit to your Branch Office."* → **content gap: actual membership form PDF not supplied yet, link as placeholder.**

### Products
Three deposit products with full terms, each as its own subsection with a rate table:

**1. Recurring Deposit (RD)**
- Term: 12–60 months. Min monthly installment ₹200, multiples of ₹100 thereafter, max ₹20,000/month.
- +0.50% for Senior Citizens/Widows/Differently Abled/Primary Facilitators. SHG/JLG/Others get 0.5% less than General.
- Interest calculated quarterly, paid at maturity. Nomination available.
- Premature closure: no interest if closed before 6 months; Savings rate (6.5%) if 6–12 months; 1% below the applicable period rate after 1 year.
- TDS deducted per Income Tax rules. Late installment payment charge: ₹1.20 per ₹100 per month (part-month counted as full month).
- KYC: Aadhaar, PAN, Ration Card, Voter ID, passport-size photo.

RD rate table:

| Period | General (Individual) | Senior Citizens / Widows / Differently Abled / Primary Facilitators | SHG / JLG / Others |
|---|---|---|---|
| 1 Year | 8.50% | 9.00% | 8.50% |
| 2 Years | 9.00% | 9.50% | 9.00% |
| 3 Years | 9.50% | 10.00% | 9.50% |
| 4 Years | 10.00% | 10.50% | 10.00% |
| 5 Years | 10.50% | 11.00% | 10.50% |

**2. Savings Deposit**
- Minimum initial deposit / minimum balance: Individuals & Senior Citizens/Widows/Differently Abled ₹500; SHG/JLG/Primary Facilitators ₹1,000; Firms/AOPs/Co-op Societies/Trusts/Companies/HUF ₹2,000.
- Interest: 7.00% (General/SHG/JLG/Others, under 60), 7.50% (Senior Citizens/Widows/Differently Abled/Primary Facilitators). Credited quarterly (Jun/Sep/Dec/Mar).
- Withdrawals require passbook; third-party withdrawal needs authorization letter. Dormant after 12 months' inactivity, then Inoperative after a further 12 months — reactivation needs fresh KYC.
- Minors: account openable at any age via guardian; minors above 10 may operate independently; confirmation of balance and fresh signature required on reaching majority.
- Charges: duplicate passbook ₹100, annual service charge ₹100, account closing charge ₹200. No overdrawing allowed.

**3. Fixed Deposit (FD)**
- Term: 1–10 years. Min deposit ₹25,000, multiples of ₹1,000, max ₹50,00,000.
- +0.50% for Senior Citizens/Widows/Differently Abled/Primary Facilitators. SHG/JLG/Others get 0.5% less than General.
- Loan against FD available up to 80% of deposit value, at 2% p.a. above the FD's own rate.
- Premature closure: 5.5% p.a. if under 6 months; 6.5% if 6–12 months; 1% below the applicable period rate after 12 months.
- Special rate: +0.25% above normal for deposits ≥ ₹20,00,000 with tenure ≥ 3 years.
- TDS applies above ₹20,000 interest/year (general) or ₹50,000/year (senior citizens).

FD rate table:

| Period | General (Individual) | Senior Citizens / Widows / Differently Abled / Primary Facilitators | SHG / JLG / Others |
|---|---|---|---|
| 1 Year | 9.50% | 10.00% | 9.50% |
| 2 Years | 10.00% | 10.50% | 10.00% |
| 3 Years | 11.00% | 11.50% | 10.50% |
| 4 Years & Above | 12.00% | 12.50% | 11.00% |

**Cumulative Deposit** — listed as a product name in the source but no terms were provided. → **content gap.**

### Loans
Only product names given, no rates/terms: **Micro & Enterprise Loan, Jewel Loan, Housing Loan, Other Loan.** → **content gap: need rate/eligibility details per loan type from the client before this page can carry real numbers.** Build the section with product names + short generic description now, marked to be completed.

### Our Leadership Team
Source note says leadership data comes from a separate board-of-directors spreadsheet (not included) — names, designations, photos all outstanding. → **content gap.** Build the section as a grid of member cards with placeholder avatar + name/role slots, ready to populate once the spreadsheet is provided.

### Archive
Source note says photos are pending from the MD. → **content gap.** Build as a simple photo-gallery section, empty/placeholder state until images are supplied.

### Contact Us
Listed in the nav but the source document has no address, phone, email, or branch details. → **content gap: need at least one branch address, phone, and email before this page is real.** Build the section (address/phone/email/map placeholders + a simple enquiry form UI) now; wire it up once real contact details arrive.

## 7. Known content gaps (blocking full completion)

1. Membership application form (PDF).
2. Cumulative Deposit product terms.
3. Loan product terms/rates for all four loan types.
4. Board of Directors data (names, designations, photos).
5. Archive photos.
6. Contact details — branch address(es), phone, email.
7. Real hero/brand imagery — `src/assets/hero.png` is currently the default Vite placeholder graphic and isn't usable.

Where to build: use clearly-marked placeholder content (e.g. "Details coming soon") for these rather than inventing fake numbers, addresses, or names.
