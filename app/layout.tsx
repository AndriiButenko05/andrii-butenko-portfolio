import type { Metadata } from "next";
import { Pathway_Extreme, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer/Footer";

const pathwayExtreme = Pathway_Extreme({
  variable: "--font-pathway-extreme",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "600"],
});

const title = "Andrii Butenko | Frontend Developer";
const description =
  "Frontend Developer with 1.5+ years of commercial experience in React (TypeScript and JavaScript) across a multi-brand platform (30+ locales), a regulated online casino, a multi-module CRM and a healthcare application. Based in Wrocław, open to remote.";

export const metadata: Metadata = {
  metadataBase: new URL("https://andrii-butenko-portfolio.vercel.app"),
  title,
  description,
  alternates: {
    canonical: "https://andrii-butenko-portfolio.vercel.app",
  },
  openGraph: {
    title,
    description,
    url: "https://andrii-butenko-portfolio.vercel.app",
    siteName: "Andrii Butenko Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Andrii Butenko",
  jobTitle: "Frontend Developer",
  url: "https://andrii-butenko-portfolio.vercel.app",
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Uniwersytet WSB Merito Wrocław",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Wrocław",
    addressCountry: "PL",
  },
  sameAs: [
    "https://github.com/AndriiButenko05",
    "https://www.linkedin.com/in/andriibutenkodeveloper/",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${pathwayExtreme.variable} ${jetBrainsMono.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <main>{children}</main>
        <Footer></Footer>
      </body>
    </html>
  );
}
