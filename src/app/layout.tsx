import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Alves & Pimentel Advocacia e Consultoria",
    template: "%s | Alves & Pimentel Advocacia e Consultoria",
  },
  description:
    "Escritório de advocacia no Rio de Janeiro especializado em Direito Trabalhista, Previdenciário, Civil, Consumidor e Família. Atendimento humanizado, soluções jurídicas eficientes e consultoria completa.",

  keywords: [
    "advogada trabalhista",
    "advogado trabalhista",
    "advogada previdenciária",
    "advogado previdenciário",
    "advogada civil",
    "advogado civil",
    "advogada de família",
    "advogado de família",
    "advogado consumidor",
    "advogada consumidor",
    "advocacia",
    "escritório de advocacia",
    "advogado",
    "advogada",
    "trabalhista",
    "previdenciário",
    "previdenciario",
    "civil",
    "familia",
    "família",
    "consumidor",
    "direito",
    "meu direito",
    "advogada em rio de janeiro",
    "advogado em rio de janeiro",
    "advogado especialista",
    "consultoria jurídica",
    "atendimento jurídico",
    "advogado online",
    "advocacia especializada",
    "direitos trabalhistas",
    "rescisão trabalhista",
    "verbas rescisórias",
    "cálculo trabalhista",
    "adicional de insalubridade",
    "adicional de periculosidade",
    "horas extras",
    "equiparação salarial",
    "demissão sem justa causa",
    "acordo trabalhista",
    "FGTS não depositado",
    "ação de indenização",
    "danos morais e materiais",
    "contratos civis",
    "cobrança indevida",
    "responsabilidade civil",
    "usucapião",
    "defesa em ações de cobrança",
    "revisão contratual",
    "compras pela internet",
    "negativação indevida",
    "golpe financeiro",
    "vício do produto",
    "cancelamento de serviços",
    "plano de internet não cancelado",
    "revisão de contrato bancário",
    "juros abusivos",
    "pensão alimentícia",
    "guarda compartilhada",
    "divórcio",
    "reconhecimento de paternidade",
    "regulamentação de visitas",
    "adoção",
    "união estável",
    "aposentadoria por idade",
    "aposentadoria por invalidez",
    "auxílio-doença",
    "auxílio por incapacidade temporária",
    "BPC LOAS",
    "revisão de aposentadoria",
    "INSS negou benefício",
    "perícia médica INSS",
    "advogada trabalhista em rio de janeiro",
    "advogado trabalhista em rio de janeiro",
    "advogada previdenciária em rio de janeiro",
    "advogado previdenciário em rio de janeiro",
    "escritório de advocacia em rio de janeiro",
    "advogado para divórcio em rio de janeiro",
    "advogado para consumidor em rio de janeiro",
    "quero entrar com um processo",
    "preciso de um advogado",
    "advogado urgente",
    "processo trabalhista o que fazer",
    "banco me cobrou indevidamente",
    "fui negativado indevidamente",
    "empresa não pagou minhas verbas",
    "INSS negou meu pedido",
    "como cancelar plano de internet",
    "juros abusivos no empréstimo",
  ],

  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Alves & Pimentel Advocacia e Consultoria",
    url: "https://alvesepimentel.com",
    title: "Alves & Pimentel Advocacia e Consultoria",
    description:
      "Especialistas em Direito Trabalhista, Previdenciário, Civil, Família e Consumidor.",
    images: [
      {
        url: "https://alvesepimentel.com/Logo_Alves_E_Pimentel.svg",
        width: 1200,
        height: 630,
        alt: "Alves & Pimentel Logo",
      },
    ],
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
    },
  },

  alternates: {
    canonical: "https://alvesepimentel.com",
  },

  metadataBase: new URL("https://alvesepimentel.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": "https://alvesepimentel.com/#organization",
    url: "https://alvesepimentel.com",
    name: "Alves & Pimentel Advocacia",
    description:
      "Escritório de advocacia no Rio de Janeiro especializado em Direito Trabalhista, Previdenciário, Civil, Consumidor, Família e Civil. Atendimento humanizado e estratégico, com foco em resultados.",
    image: "https://alvesepimentel.com/Logo_Alves_E_Pimentel.svg",
    logo: "https://alvesepimentel.com/Logo_Alves_E_Pimentel.svg",
    telephone: "+55-21-98657-1994",
    email: "sheilaalves.adv@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "R. Vinte e Quatro de Maio, 1117 - Engenho Novo",
      addressLocality: "Rio de Janeiro",
      addressRegion: "RJ",
      postalCode: "20725-001",
      addressCountry: "BR",
    },
    priceRange: "R$R$",
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Rio de Janeiro e região",
    },
    founder: {
      "@type": "Person",
      name: "Sheila Alves",
    },
    foundingDate: "2012",
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://alvesepimentel.com/#website",
    url: "https://alvesepimentel.com",
    name: "Alves & Pimentel Advocacia e Consultoria",
    description:
      "Site do escritório Alves & Pimentel Advocacia, especializado em Direito Trabalhista, Previdenciário, Civil, Consumidor e Família no Rio de Janeiro.",
    publisher: {
      "@id": "https://alvesepimentel.com/#organization",
    },
    inLanguage: "pt-BR",
  };

  return (
    <html lang="pt-BR" data-theme="light">
      <head>
        <link rel="preload" as="image" href="/bg_hero.jpg" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>

      <body className="antialiased bg-primary">{children}</body>
    </html>
  );
}
