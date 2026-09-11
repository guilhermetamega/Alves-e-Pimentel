export type PartnerProfile = {
  name: string;
  specialty: string;
  image: string;
  imageAlt: string;
  oab?: string;
  bio?: string;
};

export const siteConfig = {
  name: "Alves & Pimentel Advocacia e Consultoria",
  shortName: "Alves & Pimentel",
  url: "https://www.alvesepimentel.com",
  foundingDate: "2012",
  whatsapp: {
    number: "5521986571994",
    defaultMessage: "Bom dia! Poderia me ajudar?",
  },
  contact: {
    instagramHandle: "@sheilaalves_adv",
    instagramUrl: "https://www.instagram.com/sheilaalves_adv/",
    email: "sheilaalves.adv@gmail.com",
    phoneDisplay: "(21) 986571994",
    telephoneE164: "+5521986571994",
    address: null,
    officeHours: "Segunda a Sexta 10h - 17h",
    areaServed: "Brasil Inteiro",
  },
  developerCredit: "HYB - How You Build?",
} as const;

export const partnerProfiles: readonly PartnerProfile[] = [
  {
    name: "Sheila Alves",
    specialty: "PREVIDENCIÁRIO / TRABALHISTA",
    image: "/partners/sheila-alves.avif",
    imageAlt: "Retrato profissional de Sheila Alves",
    oab: "OAB/RJ 255.493",
  },
  {
    name: "Pietra Pimentel",
    specialty: "CÍVEL / FAMÍLIA / CONSUMIDOR",
    image: "/partners/pietra-pimentel.avif",
    imageAlt: "Retrato profissional de Pietra Pimentel",
    oab: "OAB/RJ 271.850",
  },
];

export function getWhatsAppUrl(message?: string) {
  const number = siteConfig.whatsapp.number.replace(/\D/g, "");

  if (!number || !siteConfig.whatsapp.defaultMessage) {
    return null;
  }

  const text = message || siteConfig.whatsapp.defaultMessage;
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}
