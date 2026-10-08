# Misorium – System Architecture

> Source: Quotation / SOW by Neighshop Global Technologies Pvt. Ltd.
> Client: Misorium (Ghaziabad, UP) · Project: Professional Business Website (25–30 pages)

---

## 1. Overview

A responsive business website with a client/user panel, appointment management, online payments, an AI chatbot, and chatbot-assisted ticket booking, backed by a REST API and MySQL database, deployed on a single VPS.

### Goals
- Marketing website (home, about, services, portfolio, blog, contact, etc.)
- Appointment booking and management
- User registration/login with a personal dashboard
- Online payments with status and history
- AI chatbot for queries, navigation and ticket booking help
- Admin-side APIs to manage the above

### Out of scope (per SOW)
AMC/maintenance, domain/VPS purchase, payment gateway / AI API / ticket API / SMS-OTP / email service charges, and any feature not listed in the approved scope or project flow.

---

## 2. Technology Stack

| Layer | Technology |
|---|---|
| Frontend | React.js (SPA, React Router) |
| Backend | Node.js + Express.js (REST) |
| Database | MySQL |
| Web server / proxy | Nginx |
| Process manager | PM2 |
| SSL | Let's Encrypt (Certbot) |
| Hosting | VPS – 2 vCPU, 8 GB RAM |
| External services | Payment gateway, AI/LLM API, Ticket booking API, Email/SMS provider |

---

## 3. High-Level Architecture

```
                        ┌──────────────────────────┐
                        │   Browser (Desktop /     │
                        │   Tablet / Mobile)       │
                        └────────────┬─────────────┘
                                     │ HTTPS
                        ┌────────────▼─────────────┐
                        │   Nginx (reverse proxy)  │
                        │  - serves React build    │
                        │  - proxies /api → Node   │
                        └───────┬──────────┬───────┘
                                │          │
                 static files   │          │ /api/*
                                │   ┌──────▼───────────────────────────┐
                                │   │  Node.js + Express API (PM2)     │
                                │   │                                  │
                                │   │  Auth │ Users │ Appointments     │
                                │   │  Payments │ Bookings │ Chatbot   │
                                │   │  Notifications │ Content │ Admin │
                                │   └──┬────────┬────────┬─────────┬───┘
                                │      │        │        │         │
                                │  ┌───▼───┐ ┌──▼─────┐ ┌▼──────┐ ┌▼──────────┐
                                │  │ MySQL │ │Payment │ │ AI    │ │ Ticket    │
                                │  │       │ │Gateway │ │ API   │ │ Booking   │
                                │  └───────┘ └────────┘ └───────┘ │ API       │
                                │                                  └───────────┘
                                │      Email / SMS provider (notifications, OTP)
```

---

## 4. Frontend Architecture (React.js)

### 4.1 Structure

```
frontend/
├── public/
├── src/
│   ├── assets/                # images, icons, fonts
│   ├── components/
│   │   ├── common/            # Button, Card, Modal, Input, Loader, Toast
│   │   ├── layout/            # Header, Footer, Container, Section
│   │   ├── home/              # Hero, Stats, Services, Projects, Process, ...
│   │   ├── about/             # Values, Timeline, Team, Approach
│   │   ├── appointment/       # AppointmentForm, SlotPicker, Confirmation
│   │   ├── dashboard/         # Sidebar, ProfileForm, HistoryTable
│   │   ├── payment/           # PaymentSummary, PaymentStatus
│   │   └── chatbot/           # ChatWidget, MessageList, BookingFlow
│   ├── pages/                 # one file per route (see §4.2)
│   ├── routes/                # AppRoutes, ProtectedRoute, AdminRoute
│   ├── services/              # axios instance + api modules
│   ├── context/               # AuthContext, ChatContext
│   ├── hooks/                 # useAuth, useAppointments, useChat ...
│   ├── utils/                 # validators, formatters
│   ├── styles/                # tokens (see ui.md), global CSS
│   └── App.jsx
```

### 4.2 Page / Route Map (target 25–30 pages)

**Public**

| Route | Page |
|---|---|
| `/` | Home |
| `/about` | About Us |
| `/services` | Services overview |
| `/services/:slug` | Service detail (web dev, WordPress, UI/UX, digital marketing, SEO, Google Ads, Meta Ads, branding) – ×8 |
| `/portfolio` | Portfolio / Featured work |
| `/case-studies` , `/case-studies/:slug` | Case studies |
| `/industries` | Industries served |
| `/blog`, `/blog/:slug` | Blog list & post |
| `/careers` | Careers |
| `/pricing` | Pricing |
| `/contact` | Contact Us |
| `/book-consultation` | Appointment booking |
| `/tickets` | Ticket booking (also via chatbot) |
| `/privacy-policy`, `/terms`, `/refund-policy`, `/disclaimer` | Legal pages |
| `/login`, `/register`, `/forgot-password` | Auth |

**Authenticated (client panel)**

| Route | Page |
|---|---|
| `/dashboard` | Overview |
| `/dashboard/profile` | Profile & account settings |
| `/dashboard/appointments` | Appointment history/status |
| `/dashboard/bookings` | Booking/service history |
| `/dashboard/payments` | Payments / transactions |
| `/dashboard/notifications` | Notifications |

**Admin** (`/admin/*`) – lightweight screens consuming the "required admin-side APIs" (appointments, bookings, payments, users, content).

### 4.3 State & Data
- Auth state in `AuthContext` (JWT in httpOnly cookie, or access token in memory + refresh cookie).
- Server data fetched through service modules (optionally React Query for caching).
- Form validation client-side and re-validated on server.

---

## 5. Backend Architecture (Node.js + Express)

### 5.1 Structure

```
backend/
├── src/
│   ├── config/            # env, db pool, constants
│   ├── routes/            # auth, users, appointments, payments, bookings, chat, admin, content
│   ├── controllers/
│   ├── services/          # business logic
│   │   ├── payment/       # gateway adapter (provider-agnostic interface)
│   │   ├── ai/            # LLM client + prompt/tool definitions
│   │   ├── ticketing/     # third-party ticket API adapter
│   │   └── notification/  # email / SMS adapters
│   ├── models/            # SQL queries / ORM models
│   ├── middlewares/       # auth, role guard, validate, rateLimit, errorHandler
│   ├── validators/        # Joi / Zod schemas
│   ├── utils/
│   ├── jobs/              # reminders, payment reconciliation (node-cron)
│   └── app.js / server.js
├── migrations/
├── .env.example
└── ecosystem.config.js    # PM2
```

### 5.2 Layering
`Route → Middleware (auth, validate, rate-limit) → Controller → Service → Model → MySQL`
External providers are always accessed through an **adapter** in `services/` so they can be swapped (e.g., payment gateway or ticket provider) without touching controllers.

### 5.3 Modules

| Module | Responsibility |
|---|---|
| Auth | Register, login, logout, refresh, password reset, optional OTP |
| Users | Profile, personal info, account management |
| Appointments | Create, slot selection, confirm, reschedule/cancel, status, history |
| Bookings | Ticket/service bookings and their status |
| Payments | Create order, verify, webhook, status, history |
| Chatbot | Session handling, AI calls, guided booking flow |
| Notifications | In-app + email/SMS for confirmations and status changes |
| Content | Contact enquiries, blog, portfolio, testimonials, FAQs (optional CMS-style admin APIs) |
| Admin | Management endpoints for all of the above |

---

## 6. API Design (REST, prefix `/api/v1`)

### Auth
| Method | Endpoint | Description |
|---|---|---|
| POST | `/auth/register` | Register user |
| POST | `/auth/login` | Login |
| POST | `/auth/logout` | Logout |
| POST | `/auth/refresh` | Refresh token |
| POST | `/auth/forgot-password` / `/auth/reset-password` | Password recovery |

### Users
| Method | Endpoint | Description |
|---|---|---|
| GET/PUT | `/users/me` | View/update profile |
| PUT | `/users/me/password` | Change password |
| GET | `/users/me/notifications` | List notifications |
| PATCH | `/users/me/notifications/:id/read` | Mark read |

### Appointments
| Method | Endpoint | Description |
|---|---|---|
| GET | `/appointments/slots?date=` | Available slots |
| POST | `/appointments` | Book appointment |
| GET | `/appointments` | My appointments / history |
| GET | `/appointments/:id` | Detail & status |
| PATCH | `/appointments/:id/cancel` | Cancel |
| PATCH | `/appointments/:id/reschedule` | Reschedule |

### Bookings (tickets)
| Method | Endpoint | Description |
|---|---|---|
| GET | `/bookings/options` | Search availability via third-party API |
| POST | `/bookings` | Initiate booking |
| GET | `/bookings` , `/bookings/:id` | History / status |

### Payments
| Method | Endpoint | Description |
|---|---|---|
| POST | `/payments/orders` | Create payment order |
| POST | `/payments/verify` | Verify signature after checkout |
| POST | `/payments/webhook` | Gateway webhook (signature-verified) |
| GET | `/payments` , `/payments/:id` | History / status |

### Chatbot
| Method | Endpoint | Description |
|---|---|---|
| POST | `/chat/sessions` | Start session |
| POST | `/chat/sessions/:id/messages` | Send message, get reply (supports streaming) |
| GET | `/chat/sessions/:id` | Transcript |

### Public content
| Method | Endpoint |
|---|---|
| POST | `/contact` |
| GET | `/blog`, `/blog/:slug`, `/portfolio`, `/services`, `/testimonials`, `/faqs` |

### Admin (role = admin)
`/admin/users`, `/admin/appointments`, `/admin/bookings`, `/admin/payments`, `/admin/enquiries`, `/admin/content/*` – list, view, update status.

**Conventions:** JSON, consistent envelope `{ success, data, error }`, pagination via `?page&limit`, HTTP status codes, request IDs in logs.

---

## 7. Database Design (MySQL)

### 7.1 Entity Relationship (simplified)

```
users 1───* appointments
users 1───* bookings 1───* payments
users 1───* notifications
users 1───* chat_sessions 1───* chat_messages
chat_sessions 0..1───1 bookings
appointments 0..1───* payments
```

### 7.2 Core Tables

```sql
users (
  id BIGINT PK AI, name, email UNIQUE, phone, password_hash,
  role ENUM('user','admin') DEFAULT 'user',
  email_verified TINYINT, status ENUM('active','blocked'),
  created_at, updated_at
)

appointments (
  id BIGINT PK AI, user_id FK, service VARCHAR, appointment_date DATE,
  start_time TIME, end_time TIME, customer_name, customer_email, customer_phone,
  notes TEXT, status ENUM('pending','confirmed','completed','cancelled','rescheduled'),
  created_at, updated_at
)

bookings (
  id BIGINT PK AI, user_id FK, chat_session_id FK NULL, reference VARCHAR UNIQUE,
  provider_ref VARCHAR NULL, details JSON, amount DECIMAL(12,2),
  status ENUM('initiated','pending_payment','confirmed','failed','cancelled'),
  created_at, updated_at
)

payments (
  id BIGINT PK AI, user_id FK, booking_id FK NULL, appointment_id FK NULL,
  gateway VARCHAR, gateway_order_id, gateway_payment_id, amount DECIMAL(12,2),
  currency CHAR(3) DEFAULT 'INR',
  status ENUM('created','paid','failed','refunded'),
  raw_response JSON, created_at, updated_at
)

notifications (
  id BIGINT PK AI, user_id FK, title, message, type, is_read TINYINT, created_at
)

chat_sessions ( id CHAR(36) PK, user_id FK NULL, created_at, ended_at )
chat_messages ( id BIGINT PK AI, session_id FK, role ENUM('user','assistant','system'),
                content TEXT, metadata JSON, created_at )

contact_enquiries ( id, name, email, phone, subject, message, status, created_at )
blog_posts ( id, slug UNIQUE, title, excerpt, content, cover_image, category, published_at )
portfolio_items ( id, slug, title, description, tags JSON, image, url )
testimonials ( id, name, role, company, rating, text )
faqs ( id, question, answer, sort_order )
refresh_tokens ( id, user_id FK, token_hash, expires_at, revoked )
```

**Indexes:** `users(email)`, `appointments(user_id, appointment_date)`, `appointments(appointment_date, start_time)`, `payments(gateway_order_id)`, `bookings(reference)`.
Use InnoDB, utf8mb4, foreign keys, and versioned migrations.

---

## 8. Key Flows

### 8.1 Appointment Booking
1. User opens `/book-consultation` → selects service, date, slot.
2. `GET /appointments/slots` returns free slots.
3. Customer details submitted → `POST /appointments` (status `pending`).
4. Confirmation email/notification sent; status updated by admin or auto-confirm.
5. Visible under *Dashboard → Appointments*.

### 8.2 Payment
1. Client calls `POST /payments/orders` → server creates order with gateway, stores `created` row.
2. Frontend opens gateway checkout.
3. On success, frontend calls `/payments/verify`; **webhook** is the source of truth.
4. Server updates `payments` and linked booking/appointment; notifies user.
5. Nightly job reconciles stale `created` payments.

### 8.3 AI Chatbot + Ticket Booking
```
User message
   │
   ▼
POST /chat/sessions/:id/messages
   │
   ▼
Chat service ── builds prompt (site knowledge + conversation + tool defs)
   │
   ▼
AI API ──► reply / tool call
   │            │
   │            └─ search_options(…)   → Ticketing adapter → 3rd-party API
   │            └─ create_booking(…)   → bookings table + provider API
   │            └─ create_payment(…)   → payments flow (§8.2)
   ▼
Reply streamed to ChatWidget (+ structured cards for options/status)
```
Guided steps: understand requirement → collect details → show available options → capture customer details → initiate booking → confirmation/status.
- The AI never writes to the DB directly; it can only invoke whitelisted server-side tools with validated parameters.
- Fallback when AI/ticket API is unavailable: friendly error + link to contact form.
- Actual availability depends on the third-party API and client-provided credentials.

---

## 9. Security

- Passwords hashed with bcrypt/argon2; JWT with short expiry + refresh rotation
- Helmet, CORS allow-list, rate limiting (stricter on auth, chat, payments)
- Input validation (Joi/Zod) and parameterized SQL queries
- Role-based access control (`user`, `admin`)
- Payment webhook signature verification; never store card data (gateway-hosted checkout)
- Secrets only in environment variables; `.env` excluded from VCS
- Prompt-injection safeguards on chatbot (tool whitelist, output validation, no secrets in prompts)
- HTTPS everywhere, secure/httpOnly/SameSite cookies, CSRF protection if cookies used
- Basic audit logging for admin actions

---

## 10. Deployment (VPS: 2 vCPU / 8 GB RAM)

```
VPS (Ubuntu LTS)
├── Nginx           :80/:443  → static React build + proxy /api → :5000
├── Node API (PM2)  :5000     → cluster mode (2 workers)
├── MySQL           :3306     → bound to localhost only
└── Certbot         → auto-renewing TLS
```

**Steps**
1. Provision VPS, create non-root user, enable UFW (22, 80, 443), fail2ban.
2. Install Node LTS, MySQL, Nginx, PM2, Certbot.
3. Create DB + app user; run migrations.
4. Build React (`npm run build`) → `/var/www/misorium`.
5. Start API via `pm2 start ecosystem.config.js`; `pm2 save` + startup hook.
6. Configure Nginx server block, point domain DNS, issue SSL.
7. Set up daily MySQL dumps + log rotation.

**Environment variables (`.env.example`)**
```
NODE_ENV=production
PORT=5000
DB_HOST= DB_PORT=3306 DB_USER= DB_PASSWORD= DB_NAME=
JWT_SECRET= JWT_REFRESH_SECRET=
CLIENT_URL=https://<domain>
PAYMENT_KEY_ID= PAYMENT_KEY_SECRET= PAYMENT_WEBHOOK_SECRET=
AI_API_KEY= AI_MODEL=
TICKET_API_BASE_URL= TICKET_API_KEY=
SMTP_HOST= SMTP_USER= SMTP_PASS=
SMS_API_KEY=
```

**Environments:** local → (optional) staging → production. Basic CI via GitHub Actions is recommended (lint, test, build).

---

## 11. Non-Functional Requirements

| Area | Target |
|---|---|
| Responsiveness | Desktop, laptop, tablet, mobile |
| Performance | Code-splitting, lazy-loaded images, gzip/brotli, Nginx caching of static assets; LCP < 2.5 s |
| SEO | Meta tags, semantic HTML, sitemap.xml, robots.txt (consider SSR/prerender for marketing pages) |
| Accessibility | WCAG 2.1 AA basics |
| Observability | PM2 logs, structured API logs, uptime monitor |
| Backups | Daily DB dump, retained 7–14 days |

---

## 12. Dependencies on the Client

Business content, images and copy; payment gateway credentials; AI API credentials; ticket booking API credentials; domain and VPS access; any other third-party credentials; timely feedback and approvals.

## 13. Risks & Assumptions

- Ticket booking depends on API availability/access from a third party; scope is limited to what that API supports.
- Payment gateway and AI usage costs are billed separately to the client.
- The Figma design covers Home and About only; remaining pages (appointment, auth, dashboard, payment, chatbot, tickets) will follow the same design system (see `ui.md`) and need sign-off.
- Features outside the approved scope/project flow are treated as change requests.
