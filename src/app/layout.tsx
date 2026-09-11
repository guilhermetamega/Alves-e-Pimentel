import type { Metadata, Viewport } from "next";
import { partnerProfiles, siteConfig } from "./site-config";
import "./globals.css";

const title = "Alves & Pimentel Advocacia e Consultoria";
const description =
  "Atuação jurídica nas áreas de Direito do Consumidor, Previdenciário, Trabalhista, Cível, Imobiliário e Condominial, com atendimento claro e responsável.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: title,
    template: `%s | ${siteConfig.shortName}`,
  },
  description,
  applicationName: siteConfig.shortName,
  keywords: [
    "advocacia",
    "consultoria jurídica",
    "direito do consumidor",
    "direito previdenciário",
    "direito trabalhista",
    "direito civil",
    "direito imobiliário",
    "direito condominial",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: siteConfig.shortName,
    url: "/",
    title,
    description,
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Alves & Pimentel Advocacia e Consultoria",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/opengraph-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#5d1b1b",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const professionalsJsonLd = partnerProfiles.map((profile) => ({
    "@type": "Person",
    name: profile.name,
    image: `${siteConfig.url}${profile.image}`,
    jobTitle: "Advogada",
    knowsAbout: profile.specialty.split(" / "),
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Registro profissional",
      name: profile.oab,
    },
  }));

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": `${siteConfig.url}/#organization`,
    url: siteConfig.url,
    name: siteConfig.name,
    legalName: siteConfig.name,
    logo: `${siteConfig.url}/Logo_Alves_E_Pimentel.svg`,
    image: `${siteConfig.url}/opengraph-image.png`,
    telephone: siteConfig.contact.telephoneE164,
    email: siteConfig.contact.email,
    foundingDate: siteConfig.foundingDate,
    areaServed: {
      "@type": "Country",
      name: "Brasil",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "10:00",
        closes: "17:00",
      },
    ],
    sameAs: [siteConfig.contact.instagramUrl],
    serviceType: [
      "Direito do Consumidor",
      "Direito Previdenciário",
      "Direito Trabalhista",
      "Direito Cível",
      "Direito Imobiliário",
      "Direito Condominial",
    ],
    member: professionalsJsonLd,
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    description,
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
    inLanguage: "pt-BR",
  };

  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          as="image"
          href="/bg-hero-mobile.avif"
          type="image/avif"
          media="(max-width: 767px)"
          fetchPriority="high"
        />
        <link
          rel="preload"
          as="image"
          href="/bg-hero-desktop.avif"
          type="image/avif"
          media="(min-width: 768px)"
          fetchPriority="high"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
