import type { Metadata } from "next";
import { Pathway_Extreme } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer/Footer";

const pathwayExtreme = Pathway_Extreme({
  variable: "--font-pathway-extreme",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Andrii Butenko",
  description: "Andrii Butenko Fullstack Developer portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${pathwayExtreme.variable}`}>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
