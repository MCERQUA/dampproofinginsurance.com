import type { Metadata } from "next";
import { headingFont, bodyFont } from "@/lib/fonts";
import { SmoothScroll } from "@/components/animations/SmoothScroll";
import { SITE } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | Contractors Choice Agency`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "dampproofing insurance",
    "dampproofing contractor insurance",
    "waterproofing contractor insurance",
    "foundation waterproofing insurance",
    "crawl space encapsulation insurance",
    "contractor pollution liability waterproofing",
    "dampproofing general liability",
    "waterproofing workers compensation",
    "drainage contractor insurance",
    "basement waterproofing contractor insurance",
    "waterproofing company insurance",
    "dampproofing company coverage",
  ],
  authors: [{ name: "Contractors Choice Agency" }],
  creator: "Contractors Choice Agency",
  publisher: "Contractors Choice Agency",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} | Contractors Choice Agency`,
    description:
      "Specialized insurance for dampproofing and waterproofing contractors — GL, contractor pollution liability, workers' comp, commercial auto, tools and equipment, umbrella, inland marine, and bonds. Licensed all 50 states. 15-minute quotes.",
    images: [{ url: "/images/og-image.jpg", width: 1216, height: 640, alt: `${SITE.name} — dampproofing contractor coverage` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | Contractors Choice Agency`,
    description:
      "Specialized insurance for dampproofing and waterproofing contractors. GL, contractor pollution liability, workers' comp, commercial auto, tools and equipment, umbrella, inland marine, and bonds. 15-minute quotes.",
    images: ["/images/og-image.jpg"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: { canonical: SITE.url },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "InsuranceAgency",
    name: SITE.name,
    description: SITE.description,
    url: SITE.url,
    telephone: "+18449675247",
    email: SITE.email,
    image: `${SITE.url}/images/og-image.jpg`,
    logo: `${SITE.url}/images/og-image.jpg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.state,
      postalCode: SITE.address.zip,
      addressCountry: SITE.address.country,
    },
    geo: { "@type": "GeoCoordinates", latitude: 33.2622, longitude: -111.7826 },
    employee: { "@type": "Person", name: "Josh Cotner", jobTitle: "Founder & Insurance Agent" },
    areaServed: { "@type": "Country", name: "United States" },
    serviceType: [
      "General Liability Insurance for Dampproofing Contractors",
      "Contractor Pollution Liability for Waterproofing Contractors",
      "Workers' Compensation for Dampproofing Crews",
      "Commercial Auto & Work Trucks for Waterproofing Contractors",
      "Tools & Equipment Coverage for Waterproofing Contractors",
      "Commercial Umbrella for Dampproofing Contractors",
      "Inland Marine Coverage for Waterproofing Equipment",
      "Contractor License & Surety Bonds for Dampproofing Contractors",
    ],
  };

  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      </head>
      <body className="antialiased">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
