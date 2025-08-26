import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://unevee.com"),
  title: {
    default: "Unevee | Fitness Business Platform & Health Tracking App",
    template: "%s | Unevee",
  },
  description:
    "UNEVEE bridges fitness businesses and health-conscious users. B2B gym management software with CRM, workouts, attendance, billing reminders; and a free B2C health tracking app with workouts and analytics.",
  keywords: [
    "fitness management",
    "gym software",
    "health tracking app",
    "sports training platform",
    "personal trainer tools",
    "sports facility management",
    "wellness center software",
    "fitness business platform",
    "fitness business management platform",
    "fitness business software",
    "fitness business management software",
    "arneor",
    "unevee",
    "unevee app",
    "unevee partner",
    "sports facility management",
  ],
  openGraph: {
    type: "website",
    url: "https://unevee.com",
    siteName: "UNEVEE",
    title: "UNEVEE | Fitness Business Platform & Health Tracking App",
    description:
      "Streamline your fitness business operations and empower users to track, train, and transform for free.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "UNEVEE – Fitness Business Platform & Health Tracking App",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "UNEVEE | Fitness Business Platform & Health Tracking App",
    description:
      "Streamline your fitness business operations and empower users to track, train, and transform for free.",
    images: ["/og-image.png"],
    creator: "@unevee",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any", type: "image/x-icon" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
    ],
  },
  alternates: {
    canonical: "https://unevee.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" className="scroll-smooth">
      <head>
        {/* Sitemap & humans.txt */}
        <link
          rel="sitemap"
          type="application/xml"
          href="https://unevee.com/sitemap.xml"
        />
        <link rel="author" href="/humans.txt" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "UNEVEE",
              url: "https://unevee.com",
              logo: "https://unevee.com/assets/logo.jpg",
              description:
                "Fitness business management platform and free health tracking app.",
              sameAs: [
                "https://www.instagram.com/uneveeapp",
                "https://x.com/UneveeHQ",
                "https://www.facebook.com/uneveeapp",
                "https://www.linkedin.com/company/107111103",
                "https://www.linkedin.com/company/stepoverlimits/",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-9744880311",
                contactType: "customer support",
                email: "uneveeapp@gmail.com",
                areaServed: "IN",
                availableLanguage: ["en"],
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Bangalore",
                addressCountry: "IN",
              },
            }),
          }}
        />

        {/* WebSite Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "UNEVEE",
              url: "https://unevee.com",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://unevee.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />

        {/* Breadcrumb Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://unevee.com/",
                },
              ],
            }),
          }}
        />

        {/* FAQ Schema (optional – only if you show FAQ content) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What is UNEVEE?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "UNEVEE is a fitness business management platform and free health tracking app designed for gyms, trainers, and health-conscious users.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is UNEVEE free?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. The health tracking app is free for individuals, while fitness businesses can subscribe to advanced management tools.",
                  },
                },
              ],
            }),
          }}
        />

        {children}
      </body>
    </html>
  );
}
