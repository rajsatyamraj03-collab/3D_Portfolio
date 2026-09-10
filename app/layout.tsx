import type { Metadata, Viewport } from "next";
import "./globals.css";
import BackgroundParticles from "@/components/3d/BackgroundParticles";
import CustomCursor from "@/components/layout/CustomCursor";

export const viewport: Viewport = {
  themeColor: "#030712",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Satyam Raj | Computer Science & AI/ML Engineer",
  description:
    "Portfolio of Satyam Raj — Computer Science student at SAGE University, AI/ML engineer, intelligent systems developer, and problem solver. Explore projects, skills, experience, certifications, and achievements.",
  keywords: [
    "Satyam Raj",
    "AI/ML Engineer",
    "Computer Science Engineer",
    "Machine Learning Developer",
    "Artificial Intelligence",
    "SAGE University Indore",
    "Google Student Ambassador",
    "Indore Madhya Pradesh",
    "Portfolio",
    "Three.js 3D Portfolio",
  ],
  authors: [{ name: "Satyam Raj", url: "https://github.com/rajsatyamraj03-collab" }],
  creator: "Satyam Raj",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://satyamraj.dev",
    title: "Satyam Raj | Computer Science & AI/ML Engineer",
    description:
      "Interactive 3D Developer Portfolio of Satyam Raj — CS student, AI/ML engineer, and intelligent systems developer.",
    siteName: "Satyam Raj Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Satyam Raj | Computer Science & AI/ML Engineer",
    description:
      "Interactive 3D Developer Portfolio of Satyam Raj — CS student, AI/ML engineer, and intelligent systems developer.",
    creator: "@satyamraj",
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Satyam Raj",
    jobTitle: "Computer Science Engineer & AI/ML Engineer",
    url: "https://github.com/rajsatyamraj03-collab",
    sameAs: [
      "https://www.linkedin.com/in/satyam-raj-a13a75385/",
      "https://github.com/rajsatyamraj03-collab",
      "https://leetcode.com/u/2529UG023722/",
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "SAGE University, Indore",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Indore",
      addressRegion: "Madhya Pradesh",
      addressCountry: "India",
    },
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-space-950 text-slate-100 antialiased selection:bg-cyan-500/30 selection:text-cyan-200">
        <BackgroundParticles />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
