import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PEVio — Applied Specialized Intelligence for PE",
  description:
    "Decision infrastructure for Private Equity. Auditable intelligence from due diligence through exit.",
  openGraph: {
    title: "PEVio — Applied Specialized Intelligence for PE",
    description:
      "Decision infrastructure for Private Equity. Auditable intelligence from due diligence through exit.",
    images: [
      {
        url: "/Sahring.jpg",
        width: 1200,
        height: 630,
        alt: "PEVio",
      },
    ],
    type: "website",
    siteName: "PEVio",
  },
  twitter: {
    card: "summary_large_image",
    title: "PEVio — Applied Specialized Intelligence for PE",
    description:
      "Decision infrastructure for Private Equity. Auditable intelligence from due diligence through exit.",
    images: ["/Sahring.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
