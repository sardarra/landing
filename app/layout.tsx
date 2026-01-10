import type React from "react"
import type { Metadata, Viewport } from "next"
import Script from "next/script"

import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { DM_Sans as V0_Font_DM_Sans, Space_Mono as V0_Font_Space_Mono, Source_Serif_4 as V0_Font_Source_Serif_4 } from 'next/font/google'

// Initialize fonts
const _dmSans = V0_Font_DM_Sans({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700","800","900","1000"] })
const _spaceMono = V0_Font_Space_Mono({ subsets: ['latin'], weight: ["400","700"] })
const _sourceSerif_4 = V0_Font_Source_Serif_4({ subsets: ['latin'], weight: ["200","300","400","500","600","700","800","900"] })

export const metadata: Metadata = {
  title: {
    default: "Sardar — Computer Science & AI Developer",
    template: "%s | Sardar — Portfolio",
  },
  description:
    "Portfolio showcasing AI projects, React applications, and innovative software solutions. Computer Science student at UMass Amherst passionate about machine learning, full-stack development, and robotics.",
  keywords: [
    "Sardar",
    "Computer Science",
    "AI Developer",
    "React Developer",
    "Machine Learning",
    "Full Stack Developer",
    "UMass Amherst",
    "Portfolio",
    "Web Development",
    "JavaScript",
    "TypeScript",
    "React Native",
    "Robotics",
    "Software Engineer",
    "Frontend Developer",
  ],
  authors: [{ name: "Sardar" }],
  creator: "Sardar",
  publisher: "Sardar",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://landing-ecru-phi.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Sardar — Portfolio",
    title: "Sardar — Computer Science & AI Developer",
    description:
      "Portfolio showcasing AI projects, React applications, and innovative software solutions. CS student at UMass Amherst.",
    images: [
      {
        url: "/placeholder.jpg",
        width: 1200,
        height: 630,
        alt: "Sardar — Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sardar — Computer Science & AI Developer",
    description:
      "Portfolio showcasing AI projects, React applications, and innovative software solutions. CS student at UMass Amherst.",
    images: ["/placeholder.jpg"],
    creator: "@sardarra",
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
  verification: {
    // Add your verification codes here when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
  generator: "Next.js",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  manifest: "/manifest.json",
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Sardar",
    jobTitle: "Computer Science Student & AI Developer",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://landing-ecru-phi.vercel.app",
    sameAs: [
      "https://github.com/sardarra",
      "https://www.linkedin.com/in/sardar-rahman-16b564336/",
    ],
    knowsAbout: [
      "Artificial Intelligence",
      "Machine Learning",
      "React",
      "JavaScript",
      "TypeScript",
      "Full Stack Development",
      "Robotics",
      "Web Development",
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "University of Massachusetts Amherst",
    },
    description:
      "Computer Science student at UMass Amherst passionate about AI, React, and creating impactful digital experiences.",
  }

  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <Script
          id="person-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
