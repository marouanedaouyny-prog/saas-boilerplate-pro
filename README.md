# SaaS Boilerplate Pro

A comprehensive starter kit for developers to build and launch SaaS applications quickly with built-in authentication, billing, and essential UI components.

![SaaS Boilerplate Pro Demo](./demo.png)

## ✨ Features

- **Auth Ready:** Secure authentication with NextAuth. Support for Google, GitHub, and Magic Links
- **Stripe Billing:** Integrated subscription management, webhooks, and customer portal support
- **Modern UI:** Beautifully designed components using Tailwind CSS and Lucide React
- **Next.js 14:** Optimized for the latest App Router and Server Components
- **Database Ready:** Prisma ORM with PostgreSQL schema
- **Email Templates:** Professional transactional email templates
- **SEO Optimized:** Meta tags, sitemap, and Open Graph support
- **TypeScript:** Full type safety throughout the application

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm
- PostgreSQL database (local or cloud)
- [Stripe account](https://stripe.com)
- [Google OAuth](https://console.cloud.google.com) or [GitHub OAuth](https://github.com/settings/developers)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/marouanedaouyny-prog/saas-boilerplate-pro.git
   cd saas-boilerplate-pro
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```

4. Configure your database URL in `.env.local`:
   ```
   DATABASE_URL="postgresql://user:password@localhost:5432/saas_db"
   ```

5. Run Prisma migrations:
   ```bash
   npx prisma migrate dev
   ```

6. Run the development server:
   ```bash
   npm run dev
   ```

7. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
saas-boilerplate-pro/
├── app/                    # Next.js App Router
│   ├── (auth)/            # Authentication pages
│   │   ├── sign-in/
│   │   └── sign-up/
│   ├── (dashboard)/       # Protected dashboard pages
│   │   ├── dashboard/
│   │   └── settings/
│   ├── api/               # API routes
│   │   ├── auth/         # NextAuth endpoints
│   │   └── webhooks/     # Stripe webhooks
│   └── layout.tsx        # Root layout
├── components/            # Reusable React components
│   ├── ui/               # Base UI components
│   ├── auth/             # Authentication components
│   └── dashboard/        # Dashboard components
├── lib/                  # Utility functions
│   ├── auth.ts          # NextAuth configuration
│   ├── stripe.ts        # Stripe integration
│   ├── db.ts            # Prisma client
│   └── mocks.ts         # Mock data (demo mode)
├── prisma/              # Database schema
│   └── schema.prisma
├── .env.example         # Environment variables template
├── LICENSE
└── README.md
```

## 🔐 Environment Variables

Copy `.env.example` to `.env.local` and configure:

```bash
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/saas_db"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here"

# OAuth Providers
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
GITHUB_CLIENT_ID="your-github-client-id"
GITHUB_CLIENT_SECRET="your-github-client-secret"

# Stripe
STRIPE_SECRET_KEY="sk_test_your_stripe_secret_key"
STRIPE_WEBHOOK_SECRET="whsec_your_webhook_secret"
STRIPE_PRICE_ID_BASIC="price_basic_tier_id"
STRIPE_PRICE_ID_PRO="price_pro_tier_id"

# Email (Optional)
RESEND_API_KEY="re_your_resend_api_key"
```

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Lucide React** - Modern icon library
- **React Hook Form** - Form handling
- **Zod** - Schema validation

### Backend
- **NextAuth.js** - Authentication
- **Prisma** - Database ORM
- **PostgreSQL** - Database
- **Stripe** - Payment processing
- **Resend** - Email delivery

## 🎯 Included Features

### Authentication
- ✅ Email/Password sign-up
- ✅ Google OAuth
- ✅ GitHub OAuth
- ✅ Magic Link (passwordless)
- ✅ Session management
- ✅ Protected routes

### Subscription Management
- ✅ Pricing page
- ✅ Checkout integration
- ✅ Customer portal
- ✅ Webhook handling
- ✅ Subscription status
- ✅ Plan upgrades/downgrades

### UI Components
- ✅ Responsive navigation
- ✅ Dashboard layout
- ✅ Settings pages
- ✅ Pricing cards
- ✅ Form components
- ✅ Loading states
- ✅ Error boundaries

## 📊 Database Schema

```prisma
model User {
  id            String    @id @default(cuid())
  name          String?
  email         String    @unique
  emailVerified DateTime?
  image         String?
  accounts      Account[]
  sessions      Session[]
  subscription  Subscription?
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
}

model Subscription {
  id                String   @id @default(cuid())
  userId            String   @unique
  stripeCustomerId  String   @unique
  stripeSubscriptionId String?
  status            String
  plan              String
  currentPeriodEnd  DateTime?
  user              User     @relation(fields: [userId], references: [id])
}
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Configure environment variables
4. Deploy

### Self-Hosted

```bash
# Build for production
npm run build

# Start production server
npm start
```

## 🔒 Security Features

- ✅ Environment variable validation
- ✅ CSRF protection via NextAuth
- ✅ Secure session cookies
- ✅ Input validation with Zod
- ✅ SQL injection protection (Prisma)
- ✅ XSS protection

## 🎯 Use Cases

- **SaaS Startups:** Launch your MVP in days, not weeks
- **Indie Hackers:** Validate ideas quickly
- **Agencies:** Client project starter template
- **Developers:** Learn SaaS architecture patterns
- **Enterprises:** Internal tool boilerplate

## 🔄 Future Enhancements

- [ ] Multi-tenancy support
- [ ] Team/collaboration features
- [ ] Activity logging
- [ ] Admin dashboard
- [ ] API rate limiting
- [ ] Two-factor authentication
- [ ] Dark mode toggle
- [ ] i18n support

## 🤝 Contributing

This is a portfolio project. Feel free to fork and customize for your needs.

## 📄 License

MIT License - See [LICENSE](./LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Authentication by [NextAuth.js](https://next-auth.js.org/)
- Payments by [Stripe](https://stripe.com/)
- UI components from [Lucide Icons](https://lucide.dev/)
