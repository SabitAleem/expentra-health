import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.expentrahealth.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Expentra Health | US Healthcare RCM & BPO Services",
    template: "%s | Expentra Health",
  },
  description:
    "Expentra Health is a dedicated back-office partner for US healthcare providers. Revenue cycle management, billing, coding, authorizations, and AR follow-up.",
  keywords: [
    "revenue cycle management",
    "medical billing",
    "healthcare BPO",
    "prior authorization",
    "medical coding",
    "AR denial management",
    "Expentra Health",
  ],
  authors: [{ name: "Expentra Health" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Expentra Health",
    title: "Expentra Health | US Healthcare RCM & BPO Services",
    description:
      "Your revenue cycle, handled from first call to final payment. Back-office support for US healthcare providers.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Expentra Health | US Healthcare RCM & BPO Services",
    description:
      "Your revenue cycle, handled from first call to final payment.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full scroll-smooth`}>
      <body className="min-h-full font-sans antialiased">{children}</body>
    </html>
  );
}
