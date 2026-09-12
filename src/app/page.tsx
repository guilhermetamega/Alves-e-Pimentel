import Image from "next/image";
import Link from "next/link";
import {
  BriefcaseBusiness,
  ChevronRight,
  Clock3,
  FileText,
  Globe2,
  Hotel,
  House,
  Instagram,
  Mail,
  MessageCircle,
  Phone,
  ShieldUser,
  ShoppingCart,
} from "lucide-react";
import Logo from "../../public/Logo_Alves_E_Pimentel.svg";
import { AppIcon } from "./components/AppIcon";
import Card from "./components/Card";
import ContactForm from "./components/ContactForm";
import Header from "./components/Header";
import Hr from "./components/Hr";
import Navbar from "./components/Navbar";
import PartnerCard from "./components/PartnerCard";
import Section from "./components/Section";
import Title from "./components/Title";
import { getWhatsAppUrl, partnerProfiles, siteConfig } from "./site-config";

const practiceAreas = [
  {
    title: "CONSUMIDOR",
    description:
      "Quando seus direitos são ignorados, agir com respaldo jurídico faz toda a diferença. Atuamos em casos de cobranças indevidas, contratos abusivos e falhas na prestação de serviços.",
    icon: ShoppingCart,
  },
  {
    title: "PREVIDENCIÁRIO",
    description:
      "Planejar a aposentadoria ou garantir benefícios não precisa ser complicado. Atuamos para que você tenha acesso aos seus direitos com segurança, agilidade e orientação clara em cada etapa do processo.",
    icon: ShieldUser,
  },
  {
    title: "TRABALHISTA",
    description:
      "Relações de trabalho justas começam com orientação clara e assertiva. Atuamos em ações de defesa de direitos trabalhistas e prevenção de riscos jurídicos.",
    icon: BriefcaseBusiness,
  },
  {
    title: "CÍVEL",
    description:
      "Questões civis envolvem patrimônio, família, contratos e responsabilidades do dia a dia. Nossa atuação é baseada em soluções seguras e estratégicas para proteger seus interesses.",
    icon: FileText,
  },
  {
    title: "IMOBILIÁRIO",
    description:
      "Comprar, vender ou regularizar um imóvel exige segurança jurídica e atenção aos detalhes. Atuamos para prevenir conflitos e proteger seu patrimônio em todas as fases do processo.",
    icon: House,
  },
  {
    title: "CONDOMINIAL",
    description:
      "Conflitos em condomínios exigem equilíbrio entre regras, direitos e convivência. Atuamos na prevenção e resolução de disputas com foco na harmonia e segurança jurídica.",
    icon: Hotel,
  },
] as const;

function ContactChip({
  href,
  label,
  icon,
}: {
  href: string | null;
  label: string;
  icon: "instagram" | "whatsapp";
}) {
  const Icon = icon === "instagram" ? Instagram : MessageCircle;
  const className =
    "inline-flex min-h-12 items-center gap-2 rounded-md border border-primary-dark px-4 py-2 font-crimson-pro text-sm text-primary-dark transition-colors hover:bg-primary-dark hover:text-gray-light";

  if (!href) {
    return (
      <span className={`${className} cursor-not-allowed opacity-45`}>
        <Icon aria-hidden="true" />
        {label}
      </span>
    );
  }

  return (
    <a className={className} href={href} target="_blank" rel="noreferrer">
      <Icon aria-hidden="true" />
      {label}
    </a>
  );
}

export default function Home() {
  const whatsAppUrl = getWhatsAppUrl();

  return (
    <>
      <a
        href="#main-content"
        className="fixed left-4 top-4 z-50 -translate-y-24 rounded-md bg-secondary px-4 py-3 font-lato font-bold text-primary-dark transition-transform focus:translate-y-0"
      >
        Pular para o conteúdo
      </a>

      <Header id="inicio">
        <Navbar>
          <Link href="/" aria-label="Alves & Pimentel — página inicial">
            <Image
              src={Logo}
              width={156}
              height={68}
              priority
              alt="Alves & Pimentel Advocacia e Consultoria"
              className="h-auto w-[132px] sm:w-[156px]"
            />
          </Link>
        </Navbar>
      </Header>
      <Hr />

      <main id="main-content">
        <Section
          id="hero"
          labelledBy="hero-title"
          className="hero-background flex min-h-[22.5rem] items-center px-5 py-12 sm:px-8 md:min-h-[34rem] md:px-16 lg:px-24 xl:px-32"
        >
          <div className="mx-auto flex w-full max-w-[90rem] flex-col items-center gap-8 text-center md:items-start md:text-left">
            <h1
              id="hero-title"
              className="max-w-3xl font-crimson-pro text-4xl leading-[1.05] text-gray-light sm:text-5xl lg:text-6xl"
            >
              COMPROMISSO COM O{" "}
              <span className="text-secondary">SEU DIREITO</span>
              <span className="mt-3 block">
                ATENÇÃO COM A{" "}
                <span className="text-secondary">SUA HISTÓRIA</span>
              </span>
            </h1>

            <a
              className="inline-flex min-h-14 items-center justify-center gap-1 rounded-lg bg-secondary px-5 py-3 font-crimson-pro text-xl text-primary-dark transition-colors hover:bg-secondary-light"
              href={whatsAppUrl ?? "#contact"}
              target={whatsAppUrl ? "_blank" : undefined}
              rel={whatsAppUrl ? "noreferrer" : undefined}
            >
              ENTRE EM CONTATO
              <ChevronRight aria-hidden="true" />
            </a>
          </div>
        </Section>
        <Hr />

        <Section
          id="about"
          labelledBy="about-title"
          className="relative overflow-hidden bg-gray-light py-16 md:py-24"
        >
          <div
            className="absolute inset-x-0 top-0 h-12 bg-[url('/pattern_1.svg')] bg-contain bg-repeat-x"
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-5xl px-5 text-center sm:px-8">
            <Title id="about-title">QUEM SOMOS?</Title>
            <p className="mt-6 font-lato text-lg leading-relaxed text-primary-dark md:text-xl">
              Acreditamos que cada caso é mais do que um processo, é uma parte
              da vida de alguém. Buscamos entregar segurança, clareza e
              resultados reais para quem confia em nosso trabalho, com ética,
              atenção aos detalhes e uma escuta ativa. Construímos relações
              sólidas com nossos clientes e enfrentamos cada desafio com
              estratégia e responsabilidade.
            </p>
            <p className="mt-5 font-crimson-pro text-2xl text-primary">
              Aqui, você é ouvido. E o seu direito, respeitado.
            </p>
          </div>
          <div
            className="absolute inset-x-0 bottom-0 h-12 rotate-180 bg-[url('/pattern_1.svg')] bg-contain bg-repeat-x"
            aria-hidden="true"
          />
        </Section>
        <Hr />

        <Section
          id="services"
          labelledBy="services-title"
          className="bg-gray-light px-5 py-16 sm:px-8 md:py-24 lg:px-16"
        >
          <div className="mx-auto max-w-[90rem]">
            <Title id="services-title">ÁREAS DE ATUAÇÃO</Title>
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-8">
              {practiceAreas.map((area) => (
                <Card
                  key={area.title}
                  title={area.title}
                  description={area.description}
                >
                  <AppIcon icon={area.icon} size={88} />
                </Card>
              ))}
            </div>
          </div>
        </Section>

        <div className="bg-gray-light" aria-hidden="true">
          <Image
            src="/partners-wave.png"
            width={1920}
            height={104}
            alt=""
            className="block h-[clamp(3rem,5.4vw,6.5rem)] w-full rotate-180"
          />
        </div>
        <Section
          id="partners"
          labelledBy="partners-title"
          className="bg-primary px-5 py-4 text-gray-light sm:px-8 md:py-8 lg:px-16"
        >
          <div className="mx-auto max-w-[90rem]">
            <Title id="partners-title" className="text-gray-light">
              NOSSOS PARCEIROS
            </Title>

            <div className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-8 md:grid-cols-2">
              {partnerProfiles.map((profile, index) => (
                <PartnerCard
                  key={profile.name}
                  profile={profile}
                  eager={index === 0}
                />
              ))}
            </div>
          </div>
        </Section>

        <Image
          src="/partners-wave.png"
          width={1920}
          height={104}
          alt=""
          className="block h-[clamp(3rem,5.4vw,6.5rem)] w-full"
        />

        <Section
          id="contact"
          labelledBy="contact-title"
          className="contact-section relative overflow-hidden bg-gray-light px-5 py-16 sm:px-8 md:py-24"
        >
          <span
            className="contact-ornament contact-ornament--left"
            aria-hidden="true"
          />
          <span
            className="contact-ornament contact-ornament--right"
            aria-hidden="true"
          />
          <div className="relative z-10 mx-auto max-w-5xl">
            <Title id="contact-title">ENTRE EM CONTATO</Title>
            <div className="mt-8 grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
              <div className="text-center lg:pt-8 lg:text-left">
                <p className="font-crimson-pro text-2xl leading-snug md:text-3xl">
                  Queremos conhecer a sua situação de perto.
                </p>
                <p className="mt-5 font-lato text-base leading-relaxed text-gray md:text-lg">
                  Compartilhe sua situação pelo formulário. O conteúdo será
                  aberto no WhatsApp para sua revisão antes do envio.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
                  <ContactChip
                    href={siteConfig.contact.instagramUrl}
                    label={siteConfig.contact.instagramHandle}
                    icon="instagram"
                  />
                  <ContactChip
                    href={whatsAppUrl}
                    label={siteConfig.contact.phoneDisplay}
                    icon="whatsapp"
                  />
                </div>
                <address className="mx-auto mt-8 grid max-w-md justify-items-center gap-3 text-center font-lato text-sm not-italic text-primary lg:mx-0 lg:justify-items-start lg:text-left">
                  <a
                    className="flex items-center gap-3 underline-offset-4 hover:underline"
                    href={`mailto:${siteConfig.contact.email}`}
                  >
                    <Mail className="size-5 shrink-0" aria-hidden="true" />
                    {siteConfig.contact.email}
                  </a>
                  <a
                    className="flex items-center gap-3 underline-offset-4 hover:underline"
                    href={`tel:${siteConfig.contact.telephoneE164}`}
                  >
                    <Phone className="size-5 shrink-0" aria-hidden="true" />
                    {siteConfig.contact.phoneDisplay}
                  </a>
                  <p className="flex items-center gap-3">
                    <Clock3 className="size-5 shrink-0" aria-hidden="true" />
                    {siteConfig.contact.officeHours}
                  </p>
                  <p className="flex items-center gap-3">
                    <Globe2 className="size-5 shrink-0" aria-hidden="true" />
                    Região atendida: {siteConfig.contact.areaServed}
                  </p>
                </address>
              </div>

              <div>
                <ContactForm
                  whatsappNumber={siteConfig.whatsapp.number}
                  defaultMessage={siteConfig.whatsapp.defaultMessage}
                />
              </div>
            </div>
          </div>
        </Section>
      </main>

      <footer className="border-t-4 border-secondary bg-primary px-5 py-10 text-center text-gray-light sm:px-8">
        <Image
          src={Logo}
          width={156}
          height={68}
          alt=""
          className="mx-auto h-auto w-[132px]"
        />
        <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-3 font-lato text-sm">
          <a
            href={siteConfig.contact.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="underline-offset-4 hover:underline"
          >
            {siteConfig.contact.instagramHandle}
          </a>
          <a
            href={whatsAppUrl ?? undefined}
            target="_blank"
            rel="noreferrer"
            className="underline-offset-4 hover:underline"
          >
            {siteConfig.contact.phoneDisplay}
          </a>
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="underline-offset-4 hover:underline"
          >
            {siteConfig.contact.email}
          </a>
        </div>
        <p className="mt-5 font-lato text-sm">
          {siteConfig.contact.officeHours} · Região atendida:{" "}
          {siteConfig.contact.areaServed}
        </p>
        <p className="mt-6 font-lato text-sm">
          © {new Date().getFullYear()} {siteConfig.shortName}. Todos os direitos
          reservados.
        </p>
        <nav
          aria-label="Documentos legais"
          className="mt-3 flex flex-wrap justify-center gap-x-5 gap-y-2 font-lato text-xs"
        >
          <Link
            href="/privacidade"
            className="underline-offset-4 hover:underline"
          >
            Aviso de privacidade
          </Link>
          <Link
            href="/aviso-legal"
            className="underline-offset-4 hover:underline"
          >
            Aviso legal
          </Link>
        </nav>
        <p className="mt-2 font-lato text-xs text-secondary-light">
          Developed by {siteConfig.developerCredit}
        </p>
      </footer>
    </>
  );
}
