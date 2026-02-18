import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NR Mail - Professional SMTP Email Sender Platform | Nafij Rahaman (@nafijrahaman) | email.nafij.me",
  description: "Professional SMTP email sender platform by Nafij Rahaman (Nafij, NafijThePro, NafijNinja, Nafij Khan, Nafijur Rahaman, Nafijur, NafijProBD, NafijPro, Nafij BD). Full-stack web developer from Borobongram, Pangsha, Rajbari, Bangladesh. Send beautiful emails with 13+ templates using Brevo SMTP. Built with React, Next.js, TypeScript, Node.js, MongoDB. Available at email.nafij.me and email.nafijrahaman.me. Contact: nafijthepro@gmail.com, admin@nafij.me",
  keywords: [
    "Nafij Rahaman", "Nafij", "NafijThePro", "NafijPro", "NafijNinja", "Nafij Khan", "Nafijur Rahaman", "Nafijur", 
    "NafijProBD", "Nafij BD", "Nafij Bangladesh", "nafijrahaman", "nafij.me", "@nafijrahaman", "nafijthepro",
    "email.nafij.me", "email.nafijrahaman.me", "nafij email", "Nafij Rahaman email sender",
    "নাফিজ", "নাফিজুর রহমান", "নাফিজ রহমান", "নাফিজ খান", "নাফিজ বাংলাদেশ",
    "nafijthepro@gmail.com", "admin@nafij.me", "contact nafij", "hire nafij",
    "email sender", "SMTP email", "Brevo SMTP", "email templates", "nodemailer", "professional email",
    "full stack developer", "web developer Bangladesh", "React developer", "Next.js developer",
    "MERN stack developer", "TypeScript developer", "Node.js developer", "MongoDB developer", "Python developer",
    "Borobongram", "Pangsha", "Rajbari", "Magura Polytechnic Institute", "Bangladesh web developer",
    "web development services", "custom website Bangladesh", "API development", "responsive design",
    "HTML CSS JavaScript", "Java developer", "Firebase developer", "Tailwind CSS", "Express.js",
    "hire full stack developer", "freelance web developer", "Bangladesh freelancer", "web app developer",
    "email automation", "SMTP relay", "transactional emails", "marketing emails", "email platform",
  ].join(", "),
  authors: [{ name: "Nafij Rahaman", url: "https://nafij.me" }],
  creator: "Nafij Rahaman",
  publisher: "Nafij Rahaman",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://email.nafij.me",
    siteName: "NR Mail by Nafij Rahaman | email.nafij.me",
    title: "NR Mail - Professional SMTP Email Sender by Nafij Rahaman",
    description: "Full-stack SMTP email platform by Nafij Rahaman. Send beautiful emails with 13+ professional templates. Contact: nafijthepro@gmail.com or admin@nafij.me",
    images: [
      {
        url: "https://nafij.me/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NR Mail by Nafij Rahaman - email.nafij.me",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NR Mail - Professional Email Sender | Nafij Rahaman",
    description: "SMTP email platform by Nafij Rahaman (@nafijrahaman) | email.nafij.me | Contact: nafijthepro@gmail.com",
    creator: "@nafijrahaman",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://email.nafij.me",
  },
  other: {
    "contact:email": "nafijthepro@gmail.com,admin@nafij.me",
    "contact:website": "nafij.me",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "NR Mail - SMTP Email Sender Platform",
    "description": "Professional SMTP email sender platform with 13+ templates by Nafij Rahaman",
    "url": "https://email.nafij.me",
    "alternateName": ["email.nafij.me", "email.nafijrahaman.me", "NR Mail"],
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "author": {
      "@type": "Person",
      "name": "Nafij Rahaman",
      "alternateName": [
        "Nafij", "NafijThePro", "NafijNinja", "Nafij Khan", "Nafijur Rahaman", "Nafijur", 
        "NafijProBD", "NafijPro", "Nafij BD", "Nafij Bangladesh", "@nafijrahaman",
        "নাফিজ", "নাফিজুর রহমান", "নাফিজ রহমান", "নাফিজ খান"
      ],
      "url": "https://nafij.me",
      "email": ["nafijthepro@gmail.com", "admin@nafij.me"],
      "telephone": "+8801944955128",
      "jobTitle": "Full Stack Web Developer",
      "description": "Full-stack web developer specializing in React, Next.js, Node.js, TypeScript, Python, and MERN stack. Helps people and businesses bring their ideas online.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Borobongram Village",
        "addressRegion": "Pangsha, Rajbari",
        "addressCountry": "Bangladesh"
      },
      "alumniOf": {
        "@type": "EducationalOrganization",
        "name": "Magura Polytechnic Institute"
      },
      "knowsAbout": [
        "React.js", "Next.js", "Node.js", "TypeScript", "JavaScript", "Python", "Java",
        "MongoDB", "Firebase", "MySQL", "Express.js", "Full Stack Development", 
        "Web Development", "MERN Stack", "HTML", "CSS", "Tailwind CSS", "Bootstrap",
        "REST APIs", "Authentication", "Payment Integration", "SMTP", "Email Development",
        "Responsive Design", "UI/UX Design", "Git", "GitHub", "Vercel", "API Development"
      ],
      "sameAs": [
        "https://nafij.me",
        "https://email.nafij.me",
        "https://email.nafijrahaman.me",
        "https://github.com/nafijrahaman",
        "https://facebook.com/nafijrahaman2023"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "email": "nafijthepro@gmail.com",
        "telephone": "+8801944955128",
        "contactType": "Customer Service",
        "availableLanguage": ["English", "Bengali"]
      }
    },
    "offers": {
      "@type": "Offer",
      "description": "Professional web development services including full-stack development, custom websites, e-commerce solutions, API development, database design, bug fixes, and technical consultation"
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
