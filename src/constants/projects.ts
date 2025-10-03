import { FaCreditCard, FaDove, FaLock } from "react-icons/fa";
import { MdSell } from "react-icons/md";
import { PiFilmReelFill } from "react-icons/pi";
import { RiChatSmile3Fill } from "react-icons/ri";

export const PROJECTS = [
  {
    name: "thriftease",
    title: "ThriftEase.",
    subtitle: "Sustainable thrift marketplace",
    tags: ["Fullstack", "React", "Node.js", "TypeScript"],
    desc: "Marketplace for thrifted fashion with seller dashboards and image uploads.",
    textColor: "#15883a",
    headerColor: "from-green-600 via-green-100 to-green-100",
    icon: MdSell,
    live: "#",
    repo: "https://github.com/Timonics/Thrift-Ease",
    backgroundGradient: "thriftease-background",
    shadowClassName: "shadow-lg shadow-green-400/30",
    featured: true,
    caseStudy: {
      problemStatement: {
        goal: "Create a dedicated, trustworthy platform for thrift sellers and buyers to reduce waste and make pre-loved fashion accessible.",
        description:
          "Many thrift sellers rely on social channels and ad-hoc messaging which causes discovery, trust, and fulfilment problems. The goal was to build a polished marketplace that makes listing items simple, enables secure transactions, and improves buyer-seller trust while keeping a light footprint for fast iteration."
      },
      researchPlanning: [
        "Competitive analysis: Depop, Poshmark — features, fees, listings UX",
        "Seller interviews to identify pain points (image uploads, listing speed, trust)",
        "Defined core flows: product discovery, seller listing flow, checkout, returns",
        "Data model planning: product, inventory, orders, user roles, and images"
      ],
      engineering: {
        backend: [
          "Node.js + Express (TypeScript) REST API with PostgreSQL for relational data",
          "Image storage via Cloudinary with signed upload endpoints",
          "Seller dashboard APIs (product CRUD, inventory, order management)",
          "JWT auth, role-based guards (buyer / seller), pagination & search endpoints",
          "Order management and basic fulfillment status tracking"
        ],
        frontend: [
          "React + TypeScript with Redux Toolkit for global state and async thunks",
          "Tailwind for rapid theming and consistent UI components",
          "Responsive grid and product cards, client-side filters and search",
          "Protected routes for dashboards and seller-only pages",
          "Progressive enhancement for slow networks (skeleton loaders, lazy images)"
        ],
        deployment: [
          "Frontend deployed on Vercel for instant CDN delivery",
          "Backend hosted on Render/Heroku with managed Postgres",
          "Cloudinary for images and S3-style CDN",
          "Basic CI: run tests and lint on push"
        ]
      },
      designUX: [
        "Light-green / white visual direction using Poppins (headings) and Outfit (body)",
        "Mobile-first wireframes → responsive pages for browsing and checkout",
        "Simple listing flow: upload images, set sizes, tags, condition, price",
        "Clear CTAs for add-to-wishlist, contact seller, and checkout"
      ],
      nextSteps: [
        "Add buyer-seller real-time chat for quick coordination",
        "Integrate Stripe for production-grade payments and refunds",
        "Improve search relevance and faceted filters (size, condition, price)",
        "Add analytics dashboard for sellers (views, conversions)"
      ]
    }
  },

  {
    name: "whispr",
    title: "Whispr",
    subtitle: "A chat app",
    tags: ["Fullstack", "Express", "Postgres"],
    desc: "A modern messaging application designed for secure, fast, and user-friendly communication.",
    icon: RiChatSmile3Fill,
    textColor: "#7741f4",
    headerColor: "from-indigo-700 via-indigo-100 to-indigo-100",
    backgroundColor: "bg-slate-800",
    shadowClassName: "shadow-lg shadow-2xl shadow-[#7741f4]/30",
    live: "#",
    repo: "https://github.com/Timonics/Whispr",
    caseStudy: {
      problemStatement: {
        goal: "Ship a lightweight, reliable chat for small teams and communities that prioritizes speed, clarity, and minimal friction.",
        description:
          "Existing large chat platforms are feature-heavy and resource-hungry. Whispr focuses on the essentials: real-time messaging, presence, and fast delivery with a small footprint that can be self-hosted or embedded into projects."
      },
      researchPlanning: [
        "Reviewed Signal, Slack and Socket.IO-based apps for UX and edge cases",
        "Defined constraints: low-latency messaging, simple persistence, small infra footprint",
        "User flows: one-to-one, group chat creation, message history, presence indicators",
        "Schema planning for messages, threads, read receipts and attachments"
      ],
      engineering: {
        backend: [
          "Express server with Socket.IO for real-time messaging and presence",
          "Postgres for message persistence and user metadata",
          "Redis for pub/sub and presence syncing across multiple instances",
          "JWT authentication, rate-limiting and basic moderation endpoints",
          "Message delivery guarantees: ack/retry model with optimistic UI"
        ],
        frontend: [
          "React SPA with virtualized message lists for performance (large histories)",
          "WebSocket integration with reconnection logic and offline queueing",
          "Typing indicators, read receipts and simple message reactions",
          "Attachment handling (images) with signed uploads to Cloudinary"
        ],
        deployment: [
          "Containerized service (Docker) for horizontal scaling",
          "Redis + Postgres managed (DigitalOcean or Render)",
          "Nginx reverse-proxy and TLS termination, autoscaled worker instances"
        ]
      },
      designUX: [
        "Minimalist purple theme with emphasis on message readability",
        "Accessible contrast and keyboard-first navigation",
        "Clear affordances for new messages, unread markers and pinned chats",
        "Mobile-friendly layout with easy switching between chats and contacts"
      ],
      nextSteps: [
        "End-to-end encryption option for private chats",
        "Presence sync across devices and push notifications",
        "Group admin controls and file sharing expansion",
        "Offer hosted SaaS tier with analytics and backups"
      ]
    }
  },

  {
    name: "tickettrail",
    title: "TicketTrail",
    subtitle: "Movie reservation system",
    icon: PiFilmReelFill,
    textColor: "#e7000a",
    headerColor: "from-rose-600 via-rose-100 to-rose-100",
    backgroundColor: "bg-red-300",
    shadowClassName: "shadow-lg shadow-red-400/30",
    tags: ["Express", "Node.js", "Postgres", "JavaScript"],
    desc: "APIs for movie reservations, seat booking and allocations, and payment.",
    repo: "https://github.com/Timonics/TicketTrail",
    caseStudy: {
      problemStatement: {
        goal: "Eliminate manual queues and seat conflicts by offering a reliable online booking experience for cinemas and event venues.",
        description:
          "Offline booking causes overbooked seats and poor UX. TicketTrail centralizes seat selection, locks reservations while users checkout, and ensures atomic seat allocation to avoid double-booking."
      },
      researchPlanning: [
        "Studied multiplex booking flows and common concurrency pitfalls",
        "Defined seat map model and reservation lifecycle (hold → confirm → release)",
        "Mapped integrations: payment gateway, email tickets, and admin tools",
        "Planned test cases for high-concurrency booking scenarios"
      ],
      engineering: {
        backend: [
          "Express APIs with PostgreSQL and transactional seat allocation",
          "Seat lock mechanism (short-lived reservation holds with expiry)",
          "Idempotent payment handling and Stripe integration for payments",
          "Background worker to release expired holds and send e-tickets"
        ],
        frontend: [
          "Interactive seat-map UI with grid-based selection and visual availability",
          "Checkout flow with order summary, promo code input, and confirmation",
          "Progressive enhancements for slow connections and caching showtimes"
        ],
        deployment: [
          "Backend hosted on Render or AWS ECS with a managed Postgres",
          "CDN for frontend assets; transactional email via SendGrid/Mailgun",
          "Monitoring and alerts for booking spikes and failures"
        ]
      },
      designUX: [
        "High-contrast red/rose theme for urgency and clear CTAs",
        "Seat selection feedback: hover details, seat legend, and tooltips",
        "Failure states handled gracefully (seat became unavailable) with retry UX"
      ],
      nextSteps: [
        "Support reserved seating pricing tiers and dynamic pricing",
        "Introduce loyalty accounts and digital membership cards",
        "Add multi-venue admin features and reporting dashboards"
      ]
    }
  },

  {
    name: "payhook",
    title: "PayHook",
    subtitle: "Stripe webhook handler",
    icon: FaCreditCard,
    textColor: "#0000E7",
    headerColor: "from-blue-600 via-blue-100 to-blue-100",
    backgroundColor: "bg-blue-500",
    shadowClassName: "shadow-lg shadow-red-400/30",
    tags: ["NestJS", "Node.js", "Postgres"],
    desc: "A lightweight NestJS application that listens for Stripe webhook events, verifies their signatures, and processes them accordingly.",
    repo: "https://github.com/Timonics/payhook",
    caseStudy: {
      problemStatement: {
        goal: "Provide a secure, idempotent, and easy-to-integrate webhook processing service for Stripe events.",
        description:
          "Many teams mishandle webhook verification and retries, leading to duplicated work or missed payments. PayHook centralizes verification, durable event logging, and safe processing patterns so downstream services can react reliably."
      },
      researchPlanning: [
        "Reviewed Stripe webhook best practices and common failure scenarios",
        "Defined event handling contract and idempotency strategy",
        "Planned monitoring, dead-letter handling, and retries for transient failures"
      ],
      engineering: {
        backend: [
          "NestJS microservice with verified webhook endpoints using Stripe signature verification",
          "Postgres event log table to store raw events and processing state",
          "Idempotency keys and a worker queue (BullMQ) to safely process events",
          "Retries, exponential backoff, and dead-letter queue for failed events",
          "Webhook testing harness using Stripe CLI and local tunneling"
        ],
        frontend: [
          "Small admin dashboard to visualize recent events, processing status and retries (optional)",
          "Health endpoints for monitoring and alerting integration"
        ],
        deployment: [
          "Deploy as a dedicated service (Render, Heroku, or AWS Lambda + API Gateway)",
          "Secrets stored securely (Vault / platform secrets) and rotated periodically",
          "Set up logging and alerts (Sentry / Datadog) for failed event processing"
        ]
      },
      designUX: [
        "Administrative UI focused on clarity: event timeline, metadata, and retry controls",
        "Clear error messages and remediation steps for operators"
      ],
      nextSteps: [
        "Support additional payment providers (webhook adapters)",
        "Add fine-grained event routing to multiple consumer services",
        "Expose a SaaS-style dashboard for customers to manage webhook endpoints"
      ]
    }
  },

  {
    name: "chatbin",
    title: "ChatBin",
    subtitle: "Self-destructing secret sharing",
    icon: FaLock,
    textColor: "#754C00",
    headerColor: "from-orange-600 via-orange-100 to-orange-100",
    backgroundColor: "bg-orange-300",
    shadowClassName: "shadow-lg shadow-red-400/30",
    tags: ["NestJS", "BullMQ", "Prisma"],
    desc: "A secure, self-destructing secret sharing service for sensitive information.",
    repo: "https://github.com/Timonics/payhook",
    caseStudy: {
      problemStatement: {
        goal: "Give users a privacy-first way to share sensitive strings (passwords, tokens) that self-destruct after access or expiry.",
        description:
          "People frequently share secrets via chat or email which persists indefinitely. ChatBin provides short-lived links with single-read semantics and background deletion to reduce exposure risk."
      },
      researchPlanning: [
        "Benchmarked Privnote and OneTimeSecret for UX and threat model",
        "Defined threat model: link scraping, replay attacks, and server compromise",
        "Designed expiry options: one-read, timed expiry, and manual revoke"
      ],
      engineering: {
        backend: [
          "NestJS API with Prisma + Postgres for secure data models",
          "AES encryption at rest for secret payloads, keys managed separately",
          "One-time token generation and single-read retrieval endpoint",
          "BullMQ background jobs to auto-delete expired secrets and rotate cleanup",
          "Rate-limiting, IP throttling and optional CAPTCHA for abuse protection"
        ],
        frontend: [
          "Minimal flow: paste secret → choose expiry/read-count → generate link",
          "Copy-friendly share page and simple retrieval UI for recipients",
          "Client-side input sanitization and optional client-side encryption before upload"
        ],
        deployment: [
          "Render / DigitalOcean + managed Postgres and Redis for BullMQ",
          "Cloudflare in front for DDoS protection and caching static assets",
          "Monitoring for abuse spikes and job queue health"
        ]
      },
      designUX: [
        "Dark, vault-like UI to convey privacy and seriousness",
        "Simple steps with clear indicators for expiry and read-count",
        "Fallback messages for expired or already-read links"
      ],
      nextSteps: [
        "Add optional end-to-end (client-side) encryption",
        "Introduce enterprise features: audit logs and SSO",
        "Add link PIN protection and custom expiration policies"
      ]
    }
  },

  {
    name: "bcu",
    title: "BCU Managment System",
    subtitle: "Band coordinating unit management system",
    icon: FaDove,
    textColor: "#0000FF",
    headerColor: "from-sky-600 via-sky-100 to-sky-100",
    backgroundColor: "bg-sky-300",
    shadowClassName: "shadow-lg shadow-red-400/30",
    tags: ["NestJS", "TypeORM", "React", "Fullstack"],
    desc: "Band coordinating unit management system for C&S church in Nigeria.",
    repo: "https://github.com/Timonics/BCU",
    caseStudy: {
      problemStatement: {
        goal: "Replace cumbersome spreadsheets and WhatsApp rotas with a simple system to schedule band members, track attendance, and manage resources.",
        description:
          "Church band coordinators managed schedules manually, leading to confusion and missed rehearsals. This system centralizes member data, schedules, and instrument assignments while providing easy exports and notifications."
      },
      researchPlanning: [
        "Interviewed church leaders and band members to surface common administrative tasks",
        "Mapped user roles: coordinator, musician, instrument manager",
        "Defined MVP: member CRUD, schedule calendar, attendance and resource allocation"
      ],
      engineering: {
        backend: [
          "NestJS with TypeORM and Postgres for structured member and schedule data",
          "APIs for recurring schedules, attendance logging and resource (instrument) tracking",
          "Email/SMS notification integration for schedule reminders",
          "Role-based access control for coordinators vs members"
        ],
        frontend: [
          "React dashboard for coordinators with calendar view and quick member actions",
          "Member-facing pages for viewing upcoming schedules and marking availability",
          "Export functionality (CSV) for reports and offline sharing"
        ],
        deployment: [
          "Hosted on Render with managed Postgres",
          "Cron jobs for recurring events and reminder dispatch",
          "Backups and simple role-based admin panel for user management"
        ]
      },
      designUX: [
        "Clean, approachable blue theme with large, legible typography",
        "Focus on calendar clarity and quick task flows (assign member → notify)",
        "Accessible forms for adding members and instruments with validation"
      ],
      nextSteps: [
        "Mobile app / PWA for easier check-ins and availability marking",
        "Recurring event templates and automatic rota rotation",
        "Permission hierarchy improvements and analytics for attendance trends"
      ]
    }
  }
];
