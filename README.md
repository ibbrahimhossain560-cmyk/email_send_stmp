# NR Mail - Professional SMTP Email Sender Platform by Nafij Rahaman

🌐 **Live at**: [email.nafij.me](https://email.nafij.me) | [email.nafijrahaman.me](https://email.nafijrahaman.me)

A professional full-stack email sender platform built by **Nafij Rahaman** ([@nafijrahaman](https://github.com/nafijrahaman)). Send beautiful, responsive emails using SMTP with 13 professionally designed HTML templates. Includes secure authentication, live preview, and one-click Vercel deployment.

## About the Developer

**Nafij Rahaman** - Full Stack Web Developer from Borobongram, Pangsha, Rajbari, Bangladesh.

**Also known as**: Nafij, NafijThePro, NafijNinja, Nafij Khan, Nafijur Rahaman, Nafijur, NafijProBD, NafijPro, Nafij BD, নাফিজ, নাফিজুর রহমান, নাফিজ খান

Hi, I'm Nafij. I'm a full-stack web developer who helps people and businesses bring their ideas online. I work with HTML, CSS, JavaScript, Python, Node.js, React, TypeScript, the MERN stack, and Java. I can handle everything from a simple responsive website to a complete web application with backend and database.

### What I Can Do For You:
- Build modern, responsive websites that work on all devices
- Develop full-stack applications using React, Node.js, and MongoDB
- Create smooth, user-friendly interfaces
- Fix bugs or add features to existing projects
- Write clean, efficient, and maintainable code
- Email automation and SMTP integration
- Custom email templates and designs
- API development and third-party integrations

### Why Work With Me?
I focus on delivering high-quality work, on time, with clear communication. I keep things simple and practical, so you don't have to worry about unnecessary complexity. My goal is to build something that actually works for you and your users.

### 📧 Contact Me:
- **Email**: [nafijthepro@gmail.com](mailto:nafijthepro@gmail.com) or [admin@nafij.me](mailto:admin@nafij.me)
- **Portfolio**: [nafij.me](https://nafij.me)
- **Domains**: [email.nafij.me](https://email.nafij.me) | [email.nafijrahaman.me](https://email.nafijrahaman.me)
- **GitHub**: [@nafijrahaman](https://github.com/nafijrahaman)
- **Facebook**: [nafijrahaman2023](https://facebook.com/nafijrahaman2023)
- **Phone/WhatsApp**: +880 1944955128
- **Location**: Borobongram Village, Pangsha, Rajbari, Bangladesh 🇧🇩
- **Institution**: Magura Polytechnic Institute

## Features

### 🚀 Compose Modes (4 Ways to Create Emails)
1. **📧 Template Mode** - 13 pre-designed professional HTML templates
2. **🎨 Custom HTML** - Paste your own HTML code (like Gmail)
3. **📝 Plain Text** - Simple text emails without formatting
4. **🤖 AI Generate** - Let AI write your entire email from a description

### ✨ AI-Powered Features
- **AI Content Generator** - Describe what you want, AI writes the email
  - Control length (word/character count)
  - Choose style (HTML, plain text, or default)
  - Auto-generates subject lines
- **Magic ✨ Enhancement** - Fix grammar, spelling, improve clarity
  - Works on both subject lines and body text
  - Uses free Groq API (30 req/min, 14.4k/day)

### 📧 Email Features
- SMTP email sending via Brevo relay
- 13 professional HTML templates with dynamic content
- **Custom button links** - Add your own CTAs with custom URLs and text
- Live email preview for all modes
- Recipient name personalization
- Password-protected sending (authentication required)

### 🎨 Design & UX
- Fully responsive design
- Clean, modern UI with mode selector
- Dark mode template with neon accents
- Real-time status feedback
- Vercel deploy-ready

### 🛠 Technical
- Built with Next.js 16, React 19, TypeScript
- Tailwind CSS for styling
- Nodemailer for SMTP
- Token-based authentication
- OpenAI-compatible AI API integration

## Tech Stack

- **Frontend:** Next.js, React 19, TypeScript, Tailwind CSS
- **Backend:** Next.js API Routes, Nodemailer
- **SMTP:** Brevo (smtp-relay.brevo.com)
- **Auth:** Token-based authentication with environment password
- **Deployment:** Vercel

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/nafijrahaman/email_send_stmp.git
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
SMTP_USER=your_brevo_login@smtp-brevo.com
SMTP_PASS=your_smtp_api_key_here
SENDER_EMAIL=your_verified_sender@yourdomain.com
SENDER_NAME=Your Name
REPLY_TO_EMAIL=your_reply_to@yourdomain.com
ADMIN_PASSWORD=your_secure_password_here

# AI Enhancement (Optional - for Magic ✨ button)
AI_API_KEY=your_groq_api_key_here
AI_API_URL=https://api.groq.com/openai/v1/chat/completions
AI_MODEL=llama-3.3-70b-versatile
```

> ⚠️ **Security Note**: Never commit `.env.local` or expose your real SMTP credentials in public repositories.
> 
> 📖 **AI Enhancement Setup**: For the Magic ✨ feature, get your FREE API key from [Groq Console](https://console.groq.com). See [magic_api.MD](magic_api.MD) for the complete setup guide.

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

Email sending requires authentication for security. Log in at `/login` with your admin password set via the `ADMIN_PASSWORD` environment variable. **Important:** Never commit your actual password to version control.

## API Endpoints

| Method | Route | Description |
|--------|-------|-------------|
| GET | /api/templates | List all templates |
| POST | /api/send | Send an email (auth required) - supports templates, HTML, and plain text |
| POST | /api/preview | Preview a template or custom content |
| POST | /api/auth | Login with password |
| POST | /api/auth/verify | Verify auth token |
| POST | /api/enhance | AI-enhance email text (auth required) ✨ |
| POST | /api/generate | AI-generate full email content from description (auth required) 🤖 |

## ✨ AI Features

### 🤖 AI Content Generator

Describe what you want, and AI will write the entire email for you:

```bash
POST /api/generate
{
  "description": "Write a professional welcome email for new customers",
  "length": 150,  // Optional: target word/character count
  "templateStyle": "html"  // "html", "plain", or "default"
}
```

**Features:**
- Generates complete email body
- Auto-creates subject line
- Control content length
- Choose HTML or plain text style
- Perfect for quick email drafts

### 🔧 Magic ✨ Enhancement

The Magic ✨ button uses **free AI models** from Groq to automatically improve your emails:

- **For Subjects**: Fixes grammar, makes it professional, keeps it concise
- **For Body**: Corrects errors, improves flow, maintains your intent

### Quick Setup:

1. Get FREE API key: [console.groq.com](https://console.groq.com)
2. Add to `.env.local`:
   ```bash
   AI_API_KEY=gsk_your_key_here
   ```
3. Restart dev server
4. Click Magic ✨ next to Subject or Body fields

**📖 Detailed Guide**: See [magic_api.MD](magic_api.MD) for complete setup, examples, troubleshooting, and alternative AI providers.

**Rate Limits**: Groq free tier includes 30 requests/minute (14,400/day) - more than enough!

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

**Nafij Rahaman** (also known as: Nafij, NafijThePro, NafijNinja, Nafij Khan, Nafijur Rahaman, Nafijur, NafijProBD, NafijPro, Nafij BD, Nafij Bangladesh, @nafijrahaman, নাফিজ, নাফিজুর রহমান, নাফিজ খান, নাফিজ বাংলাদেশ)

Full Stack Web Developer specializing in React, Next.js, Node.js, TypeScript, MongoDB, Python, and the MERN stack.

### 📬 Contact Information:
- **Primary Email**: [nafijthepro@gmail.com](mailto:nafijthepro@gmail.com)
- **Business Email**: [admin@nafij.me](mailto:admin@nafij.me)
- **Portfolio**: [nafij.me](https://nafij.me)
- **Email Platform**: [email.nafij.me](https://email.nafij.me) | [email.nafijrahaman.me](https://email.nafijrahaman.me)
- **GitHub**: [@nafijrahaman](https://github.com/nafijrahaman)
- **Facebook**: [nafijrahaman2023](https://facebook.com/nafijrahaman2023)
- **Phone/WhatsApp**: +880 1944955128
- **Location**: Borobongram Village, Pangsha, Rajbari, Bangladesh 🇧🇩
- **Institution**: Magura Polytechnic Institute

### Skills & Expertise:
HTML, CSS, JavaScript, TypeScript, Python, Java, React.js, Next.js, Node.js, Express.js, MongoDB, Firebase, MySQL, PostgreSQL, Tailwind CSS, Bootstrap, Git, GitHub, REST APIs, GraphQL, Authentication Systems, JWT, OAuth, Payment Integration (Stripe, PayPal), Email Automation, SMTP Integration, Full Stack Development, Web Design, UI/UX, Responsive Design, Mobile-First Design, SEO Optimization, Performance Optimization, Testing, Debugging, Deployment (Vercel, Netlify, Heroku), Docker, CI/CD

### Services Offered:
- Custom Website Development
- Full Stack Web Applications (MERN Stack)
- E-commerce Solutions with Payment Gateway
- API Development & Integration
- Database Design & Management
- Bug Fixes & Feature Additions
- Code Review & Optimization
- Technical Consultation

If you're looking for a reliable developer who takes projects seriously and is easy to work with, let's talk.
