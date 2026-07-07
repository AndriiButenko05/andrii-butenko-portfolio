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

export const metadata: Metadata = {
  metadataBase: new URL("https://andrii-butenko-portfolio.vercel.app"),
  title: "Andrii Butenko | Frontend Developer",
  description:
    "Andrii Butenko — Frontend Developer specializing in React, TypeScript, and Next.js, with commercial experience across CRM and healthcare platforms.",
  alternates: {
    canonical: "https://andrii-butenko-portfolio.vercel.app",
  },
  openGraph: {
    title: "Andrii Butenko | Frontend Developer",
    description:
      "Frontend Developer specializing in React, TypeScript, and Next.js, with commercial experience across CRM and healthcare platforms.",
    url: "https://andrii-butenko-portfolio.vercel.app",
    siteName: "Andrii Butenko Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Andrii Butenko | Frontend Developer",
    description:
      "Frontend Developer specializing in React, TypeScript, and Next.js, with commercial experience across CRM and healthcare platforms.",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Andrii Butenko",
  jobTitle: "Frontend Developer",
  url: "https://andrii-butenko-portfolio.vercel.app",
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
