# Misorium – UI Specification

> Derived from the provided Figma export (`Misorium.pdf`): **Home** and **About Us** pages for *Misorium Technologies*.
> Items marked **(extension)** are not in the Figma yet but are required by the SOW and should be designed in the same style.

---

## 1. Design Language

Clean, corporate-tech look: white and light-blue-tinted sections, bold navy/blue headings with a single **red accent** (underline strokes, eyebrow labels, diagonal shapes), rounded cards with soft shadows, and dark-navy feature bands for contrast.

### 1.1 Color Tokens (approximate, sampled from design – confirm in Figma)

| Token | Value | Usage |
|---|---|---|
| `--color-primary` | `#1F4FD8` | Primary buttons, links, icons, highlights |
| `--color-primary-dark` | `#0B1F5C` | Dark bands (footer, "Why Misorium", capabilities strip), headings |
| `--color-accent` | `#E31E24` | Eyebrow text, small underline bars, diagonal hero shapes, number labels (01…06) |
| `--color-bg` | `#FFFFFF` | Page background |
| `--color-bg-soft` | `#F3F7FE` | Alternate section background |
| `--color-card` | `#FFFFFF` | Cards (with border `#E3E9F5`) |
| `--color-text` | `#0F172A` | Headings |
| `--color-text-muted` | `#5B6478` | Body / descriptions |
| `--color-success` | `#16A34A` | Payment/appointment success **(extension)** |
| `--color-warning` | `#F59E0B` | Pending status **(extension)** |
| `--color-danger` | `#DC2626` | Errors / failed **(extension)** |
| `--color-star` | `#F5B301` | Rating stars |

### 1.2 Typography
- Family: geometric/humanist sans (Inter / Poppins style). Use one family with weights 400/500/600/700/800.
- Headline pattern: **two-tone** – first part in dark navy, key phrase in primary blue (e.g., "We Build Digital Experiences **That Grow Businesses**").
- Eyebrow: uppercase, 11–12 px, letter-spacing `0.08em`, red, preceded by a short red bar.

| Style | Size (desktop / mobile) | Weight |
|---|---|---|
| Display (hero H1) | 52–56 / 34 px | 800 |
| H2 (section) | 36–40 / 26 px | 700 |
| H3 (card title) | 18–20 / 17 px | 600 |
| Body | 15–16 / 15 px | 400 |
| Small / caption | 12–13 px | 400–500 |

### 1.3 Spacing, Radius, Shadow
- Spacing scale: 4, 8, 12, 16, 24, 32, 48, 64, 96 px. Section vertical padding: 80–96 px desktop, 48 px mobile.
- Container: max-width 1200 px, 24 px side padding.
- Radius: buttons 8 px, cards 14–16 px, images 16 px, pills 999 px.
- Shadow: `0 8px 24px rgba(15, 35, 95, 0.08)` for cards; elevate on hover.
- Breakpoints: `sm 640`, `md 768`, `lg 1024`, `xl 1280`.

### 1.4 Iconography & Imagery
- Line icons (Lucide / Feather style) inside soft-blue rounded squares; process steps use circular outlined icons connected by arrows.
- Photography: smiling professionals/teams cut into hero with diagonal blue-and-red shapes behind; project thumbnails as laptop/device mockups.
- Floating "glass" UI chips over hero image (e.g., "Website Development", "Digital Marketing", "SEO").

---

## 2. Reusable Components

| Component | Spec |
|---|---|
| **Button – Primary** | Solid primary blue, white text, 8 px radius, optional trailing arrow icon |
| **Button – Secondary** | White with blue border/text |
| **Button – CTA Accent** | Red filled ("Book a Consultation" in header) |
| **Eyebrow label** | Red uppercase text with short red line |
| **Section heading** | Eyebrow + two-tone H2 + muted subtext (centered or left) |
| **Stat item** | Icon + big number (`100+`) + label; used in rows of 4 |
| **Service card** | Soft-blue icon tile, title, 2-line description, "Learn more →" |
| **Project card** | Device mockup image, title, description, tag chips, "View Case Study →" |
| **Feature card** | Icon, title, short text; 3×2 grid |
| **Value card** | Large faded red number (01–06), title, description |
| **Process step** | Circular icon, step title, short text, connector arrow |
| **Industry tile** | Photo with overlay label + "Explore →" |
| **Testimonial card** | 5-star row, quote, avatar, name, role; carousel arrows |
| **FAQ accordion** | Question row with chevron; first item expanded; left illustration |
| **Blog card** | Cover image, category tag, title, excerpt, date, "Read Article →" |
| **Team card** | Portrait, name, role, short bio, LinkedIn icon |
| **Timeline** | Numbered vertical list (01–04) with illustration on right |
| **CTA banner** | Dark navy band, heading, short text, primary button (repeated before footer) |
| **Header** | Logo left; nav center; "Client Login" (outlined) + "Book a Consultation" (red) right |
| **Footer** | Dark navy; brand blurb + social icons; columns Company / Services / Resources / Get In Touch; stats strip; legal links; red bottom border |

---

## 3. Global Layout

### 3.1 Header
`[Logo: Misorium Technologies]  Home · About Us · Services ▾ · Portfolio · Case Studies · Industries · Blog · Careers · Contact Us   [Client Login] [Book a Consultation]`
- Sticky, white, subtle bottom shadow on scroll. Active link in primary blue with underline.
- **Mobile:** hamburger → full-height drawer; both CTAs pinned at drawer bottom.
- Client Login → `/login` (becomes avatar menu when authenticated) **(extension)**.

### 3.2 Footer
- **Brand column:** logo, "Building digital experiences that help businesses grow.", social icons (LinkedIn, Instagram, Facebook, X).
- **Company:** About Us, Services, Portfolio, Case Studies, Industries We Serve, Careers.
- **Services:** Website Development, WordPress Development, UI/UX Design, Digital Marketing, SEO, Google Ads, Meta Ads, Branding & Logo Design.
- **Resources:** Blog, Pricing, Book a Consultation, Contact Us, Client Login.
- **Get In Touch:** email, phone, location, "Book a Free Consultation" outlined button.
- Stats strip (100+ Projects, 50+ Clients, 10+ Industries, 5+ Years), copyright, Privacy Policy · Terms & Conditions · Refund & Cancellation · Disclaimer.

---

## 4. Page: Home (`/`)

Sections in order (top → bottom):

1. **Hero** – Eyebrow "Your Technology Partner". H1: *We Build Digital Experiences That Grow Businesses.* Subtext about websites, digital marketing, UI/UX and technology solutions. CTAs: **Start a Project →**, **Explore Services**. Trust row: 3 mini-features (Custom Solutions, Growth Focused, Dedicated Support) with icons. Right: professional photo on blue/red diagonal background with floating chips and a "+230% Business Growth" stat card.
2. **Stats strip** – Projects Completed 100+, Happy Clients 50+, Industries Served 10+, Years of Experience 5+; "Trusted by startups & businesses" with partner logos row.
3. **Complete Digital Solutions for Your Business** – 8 service cards in a 4×2 grid (Website Development, WordPress Development, UI/UX Design, Digital Marketing, SEO, Google Ads, Meta Ads, Branding & Logo Design). Dark-blue "Our Recent Projects" teaser box with **View Portfolio →**, and a "Your Success Is Our Priority" side panel with 6 mini benefits.
4. **Featured Work – Our Recent Projects** – three project cards (*Luxeloom*, *NearMed*, *HubFiesta*) with tags and **View Case Study →**; stat chips (100+ projects, 50+ clients, 10+ industries, 5+ years); **View Full Portfolio →**.
5. **Technology Partner banner** – repeat hero-style block with image, "+230% avg. growth" card and floating service chips.
6. **Why Choose Misorium – "Your Growth Is Our Priority."** – testimonial quote + rating on left image; 3×2 feature grid (Business First Approach, Custom Solutions, Result Driven Strategies, Creative & Modern Design, Latest Technologies, Dedicated Support).
7. **From Idea to Impact (Process)** – 7 steps: Consultation → Strategy → Design → Development → Testing → Launch → Growth, plus **Start Your Project** / **Learn More About Our Process** buttons.
8. **Solutions for Every Industry** – 8 photo tiles: E-commerce, Healthcare, Education, Real Estate, Travel & Hospitality, Finance, Startups, Professional Services; **Explore All Industries →**.
9. **What Our Clients Say About Us** – 3 testimonial cards with arrows; avatar stack "50+ Happy Businesses"; stats row.
10. **CTA – "Let's Build Something Great Together."** – laptop mockup, **Start Your Project** / **Schedule a Free Consultation**, 3 assurances (Free Consultation, Quick Response, No Obligation).
11. **FAQ – "Got Questions? We've Got Answers."** – 7–8 accordion items (services, templates, timelines, marketing, maintenance, quotes) + "Still have questions? Talk to our team" button.
12. **Blog – "Ideas That Help Your Business Grow."** – 3 blog cards + **View All Articles →**.
13. **Final CTA band** → **Footer**.

---

## 5. Page: About Us (`/about`)

1. **Hero** – "Driven by Ideas. *Built for Your Growth.*" with short paragraph, stat row (100+ / 50+ / 10+ / 5+), buttons **Our Story**, **Meet Our Team**; right image with blue/red shapes and chips (*Ideas · Technology*).
2. **Who We Are – "Technology That Solves Real Business Problems."** – text + buttons (**Our Approach**, **Get in Touch**) beside dashboard/laptop imagery and "One partner, End-to-end digital solutions" card; 3 mini points (Understand, Build, Grow).
3. **Core Values – "The Principles Behind Everything We Build."** – 6 value cards: Client First, Innovation, Quality, Transparency, Ownership, Growth Mindset.
4. **Capabilities – "Everything You Need to Build, Launch & Grow."** – dark band with 5-stage flow (Strategy → Design → Technology → Marketing → Growth), followed by 6 capability cards (Strategy & Consulting, Design & UI/UX, Web & App Development, Digital Marketing, Branding & Creative, Business Growth) with **Explore →**.
5. **Our Story – "From an Idea to a Digital Growth Partner."** – numbered timeline (The Beginning, Building & Learning, Growing With Clients, What's Next) + mountain/journey illustration with labels.
6. **Team – "The People Behind the Work."** – 4 portrait cards (Founder & CEO, CTO / Technology Lead, Design Lead, Marketing & Growth Lead) with LinkedIn; CTA strip *Work With Us →*.
7. **Why Misorium – "More Than a Technology Partner. A Partner in Your Growth."** – dark panel with stats + **Let's Work Together →**; 6 reason cards (Business Understanding, End-to-End Expertise, Custom Solutions, Transparent Collaboration, Scalable Technology, Long-Term Partnership).
8. **Our Approach – "A Clear Process. Better Collaboration. Better Results."** – 5 steps (Discover, Strategize, Create, Launch, Grow).
9. **CTA strip** ("Need a Digital Partner?" → **Book a Consultation**) → **Final CTA** → **Footer**.

> Placeholder content in Figma ("Your Name", Founder/CEO etc.) must be replaced with client-provided team data.

---

## 6. Additional Pages (extension – required by SOW)

These reuse the tokens/components above. They need wireframes and client sign-off before build.

### 6.1 Inner marketing pages
Services overview + 8 service detail pages, Portfolio, Case Study detail, Industries, Blog list/detail, Careers, Pricing, Contact, legal pages.
- **Page header:** soft-blue band with breadcrumb, eyebrow, two-tone H1, short intro.
- **Contact:** two-column – form (name, email, phone, subject, message) + contact info card + map placeholder.
- **Service detail:** hero, benefits grid, process strip, related projects, FAQ, CTA.

### 6.2 Appointment (`/book-consultation`)
- 3-step wizard with progress indicator: **1 Service → 2 Date & Time → 3 Your Details → Confirmation**.
- Calendar date picker + time-slot chips (available / selected / disabled states).
- Details form: name, email, phone, notes.
- Summary card (sticky on desktop) + confirmation screen with reference ID, "Add to calendar", "View in dashboard".

### 6.3 Auth (`/login`, `/register`, `/forgot-password`)
- Split layout: left brand panel (dark navy with diagonal red/blue shapes, headline), right white form card.
- Inline validation, password visibility toggle, optional OTP step.

### 6.4 Client Dashboard (`/dashboard/*`)
- Left sidebar (Overview, Profile, Appointments, Bookings, Payments, Notifications, Logout); collapses to bottom tabs / drawer on mobile.
- Overview: greeting, 4 stat cards (upcoming appointments, bookings, payments, notifications), recent activity table.
- Tables with status badges: Pending (amber), Confirmed/Paid (green), Cancelled/Failed (red), Completed (blue). Cards instead of rows on mobile.
- Profile: personal info form + change password.
- Notifications: list with unread dot, mark-as-read.

### 6.5 Payment
- Order summary card → **Pay Securely** button → gateway checkout (modal/redirect).
- Result screens: **Success** (green check, transaction ID, receipt link), **Failed** (retry), **Pending**.
- Payment history table with status filter.

### 6.6 Ticket Booking (`/tickets`)
- Search form (requirement fields depend on the integrated ticket API), results list cards, passenger/customer details step, review & pay, booking confirmation/status.
- Same flow is available conversationally in the chatbot.

### 6.7 AI Chatbot Widget
- Floating round button, bottom-right (primary blue, chat icon; red notification dot).
- Panel: 380×560 px desktop; full-screen sheet on mobile. Header (logo, "Misorium Assistant", online dot, minimize/close).
- Message bubbles: user = primary blue, bot = soft-gray; typing indicator; timestamps optional.
- Quick-reply chips (Services, Book appointment, Book ticket, Contact us).
- Rich cards inside chat: ticket option cards, booking summary, status badge, "Pay now" button.
- Error/fallback state with link to Contact page.

### 6.8 Admin screens
Simple table-driven views for users, appointments, bookings, payments, enquiries, content – reuse dashboard shell with an "Admin" label.

---

## 7. Responsive Behavior

| Element | Desktop (≥1024) | Tablet (768–1023) | Mobile (<768) |
|---|---|---|---|
| Nav | Full inline | Hamburger | Hamburger + drawer |
| Hero | 2 columns | 2 columns, smaller image | Stacked, image below text |
| Card grids | 4 / 3 columns | 2 columns | 1 column (horizontal scroll for stats/logos) |
| Process steps | Horizontal with arrows | Wrapped 4+3 | Vertical stepper |
| Industry tiles | 4×2 | 3 per row / 2 per row | 2 per row |
| Footer | 5 columns | 3 columns | Stacked, accordions optional |
| Dashboard | Sidebar | Collapsible sidebar | Bottom tab bar |
| Chatbot | Floating panel | Floating panel | Full-screen sheet |

Tap targets ≥ 44 px; body text never below 14 px on mobile.

---

## 8. Interaction & Motion
- Hover: cards lift 4 px + stronger shadow; buttons darken; "Learn more →" arrow nudges right.
- Scroll reveal: fade-up (200–300 ms, 16 px) once per section.
- Counters animate on first view for stats.
- Accordion: height + chevron rotate, 200 ms.
- Carousel (testimonials/projects): arrows + swipe on touch.
- Respect `prefers-reduced-motion`.

## 9. Accessibility
- Contrast ≥ 4.5:1 for body text (verify muted gray and red-on-white eyebrow sizes).
- Visible focus rings (2 px primary outline), keyboard-operable nav/accordion/carousel/chat.
- Alt text for all imagery, `aria-expanded` on accordions, labelled form fields, `aria-live` for chat messages and toasts.

## 10. Implementation Notes
- Implement tokens as CSS variables (or Tailwind theme) in `src/styles/tokens.css`.
- Build the components in §2 first in `components/common` and `components/layout`, then compose pages.
- Export optimized WebP images from Figma; use `loading="lazy"` below the fold.
- Content (copy, logos, testimonials, projects, team) comes from the client or backend content APIs; avoid hard-coding where it will change.
- The Figma file as provided is a flattened export; request the live Figma link for exact colors, fonts, spacing and assets.
