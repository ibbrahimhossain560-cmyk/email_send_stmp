# NR Mail - SMTP Email Sender Platform

A full-stack email sender platform built by **Nafij Rahaman**. Send beautiful emails using SMTP with 13 professionally designed HTML templates. Includes authentication, live preview, and one-click Vercel deployment.

## Features

- SMTP email sending via Brevo relay
- 13 HTML email templates (Welcome, Newsletter, Password Reset, Invoice, Promotion, Event Invite, Feedback, Order Confirmation, Birthday, Minimal, Dark Mode, Casual, Just Email)
- Password-protected email sending (authentication required)
- Live email preview
- Fully responsive design
- Dark mode template with neon accents
- Vercel deploy-ready
- Built with Next.js, TypeScript, and Tailwind CSS

## Tech Stack

- **Frontend:** Next.js, React 19, TypeScript, Tailwind CSS
- **Backend:** Next.js API Routes, Nodemailer
- **SMTP:** Brevo (smtp-relay.brevo.com)
- **Auth:** Token-based authentication with environment password
- **Deployment:** Vercel

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/ibbrahimhossain560-cmyk/email_send_stmp.git
cd email_send_stmp
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Edit `.env.local` with your SMTP credentials:
```
SMTP_HOST=smtp-relay.brevo.com
SMTP_PORT=587
SMTP_USER=a29fec001@smtp-brevo.com
SMTP_PASS=your_smtp_key_here
SENDER_EMAIL=a29fec001@smtp-brevo.com
SENDER_NAME=Nafij Rahaman
ADMIN_PASSWORD=nafijpro++
```

4. Run development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000)

## Deploy to Vercel

1. Push to GitHub
2. Import project on [vercel.com](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy

## Authentication

Email sending requires authentication. Log in at `/login` with the admin password (default: `nafijpro++`). Set your own via the `ADMIN_PASSWORD` environment variable.

## API Endpoints

| Method | Route | Description |
|--------|-------|-------------|
| GET | /api/templates | List all templates |
| POST | /api/send | Send an email (auth required) |
| POST | /api/preview | Preview a template |
| POST | /api/auth | Login with password |
| POST | /api/auth/verify | Verify auth token |

## Email Templates

1. **Welcome** - Onboarding new users
2. **Newsletter** - Periodic updates
3. **Password Reset** - Secure reset links
4. **Invoice** - Payment details
5. **Promotional** - Sales and offers
6. **Event Invitation** - Event/webinar invites
7. **Feedback Request** - User feedback
8. **Order Confirmation** - Order details
9. **Birthday Greeting** - Birthday wishes
10. **Minimal Clean** - General purpose
11. **Dark Mode** - Sleek dark-themed with neon accents
12. **Casual Friendly** - Relaxed, warm casual messages
13. **Just Email** - Plain and simple, no frills

## Developer

**Nafij Rahaman** - Full Stack Developer

- Portfolio: [nafij.me](https://nafij.me)
- GitHub: [nafijrahaman](https://github.com/nafijrahaman)
- Facebook: [nafijrahaman2023](https://facebook.com/nafijrahaman2023)
- Phone: 01944955128

Student at Magura Polytechnic Institute
