//Components
import Header from "../components/Header";
import Hr from "../components/Hr";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Image from "next/image";
import Section from "../components/Section";
import TwoColorsText from "../components/TwoColorsText";
import Button from "../components/Button";
import NoGapDiv from "../components/NoGapDiv";
import Pattern from "../components/Pattern";

//Images and Icons
import Logo from "../../../public/Logo_Alves_E_Pimentel.svg";

//Actions
import { goToWhatsapp } from "../actions";
import Title from "../components/Title";
import Card from "../components/Card";
import { AppIcon } from "../components/AppIcon";
import {
  BriefcaseBusiness,
  FileText,
  Hotel,
  House,
  ShieldUser,
  ShoppingCart,
} from "lucide-react";

export default function Test() {
  return (
    <>
      <Header id={"inicio"} bgColor="primary">
        <Navbar>
          <Link
            href="/Test"
            className="max-[960px]:pointer-events-none max-[960px]:cursor-default"
          >
            <Image
              src={Logo}
              className="w-[156px] h-[68px]"
              alt="Logo Alves e Pimentel"
            />
          </Link>
        </Navbar>
      </Header>
      <Hr />
      <Section
        className={`bg-[url("/bg_hero.png")] aspect-auto bg-no-repeat bg-cover bg-center px-[32px] pb-30 pt-6 min-[660px]:px-32 min-[660px]:pt-24 min-[660px]:pb-[280px] flex flex-col max-[1000px]:items-center max-[1000px]:text-center min-[1000px]:justify-start font-crimson-pro max-[860px]:text-3xl min-[860px]:text-4xl min-[1200px]:text-6xl gap-8`}
        id={"hero"}
      >
        <NoGapDiv col={true} maxGap="8" minGap="0">
          <TwoColorsText
            colorOne={"gray-light"}
            colorTwo={"text-secondary-repeat"}
            firstText={"COMPROMISSO COM O"}
            secondText={"SEU DIREITO"}
          />
          <TwoColorsText
            colorOne={"gray-light"}
            colorTwo={"text-secondary-repeat"}
            firstText={"ATENÇÃO COM A"}
            secondText={"SUA HISTÓRIA"}
          />
        </NoGapDiv>
        <Button
          className="bg-secondary w-fit p-4 text-primary-dark text-2xl rounded-md cursor-pointer"
          onClick={goToWhatsapp}
        >
          ENTRE EM CONTATO
        </Button>
      </Section>
      <Hr />

      <Section id={"about"} className="font-crimson-pro text-primary">
        <Pattern
          className={`w-full h-[64px] bg-[url('/pattern_1.svg')] bg-repeat bg-contain mb-12`}
        />
        <Title>QUEM SOMOS?</Title>
        <p className="text-center text-2xl max-[1200px]:px-8 min-[1200px]:px-[128px]">
          Acreditamos que cada caso é mais do que um processo, é uma parte da
          vida de alguém. Buscamos entregar segurança, clareza e resultados
          reais para quem confia em nosso trabalho, com ética, atenção aos
          detalhes e uma escuta ativa, construímos relações sólidas com nossos
          clientes e enfrentamos cada desafio com estratégia e responsabilidade.
          Aqui, você é ouvido. E o seu direito, respeitado.
        </p>
        <Pattern
          className={`w-full h-[64px] bg-[url('/pattern_1.svg')] bg-repeat bg-contain rotate-180 scale-x-[-1] mt-12`}
        />
      </Section>

      <Hr />
      <Section
        id="services"
        className="my-8 min-[660px]:my-12 font-crimson-pro text-primary max-[1200px]:px-8 min-[1200px]:px-[128px]"
      >
        <Title>ÁREAS DE ATUAÇÃO</Title>
        <div className="min-[1100px]:grid max-[1100px]:flex max-[1100px]:flex-col max-[1100px]:items-center min-[1100px]:grid-cols-3 min-[800px]:grid-rows-2 min-[800px]:place-items-center gap-x-40 gap-y-8 w-full">
          <Card description="Quando seus direitos são ignorados, agir com respaldo jurídico faz toda a diferença. Atuamos em casos de cobranças indevidas, contratos abusivos e falhas na prestação de serviços.">
            <AppIcon
              icon={ShoppingCart}
              size={172}
              strokeWidth={1.1}
              alt="ShoppingCart"
            />
            CONSUMIDOR
          </Card>
          <Card description="Planejar a aposentadoria ou garantir benefícios não precisa ser complicado. Atuamos para que você tenha acesso aos seus direitos com segurança, agilidade e orientação clara em cada etapa do processo.">
            <AppIcon
              icon={ShieldUser}
              size={172}
              strokeWidth={1}
              alt="ShieldUser"
            />
            PREVIDENCIÁRIO
          </Card>
          <Card description="Relações de trabalho justas começam com orientação clara e assertiva. Atuamos em ações de defesa de direitos trabalhistas e prevenção de riscos jurídicos.">
            <AppIcon
              icon={BriefcaseBusiness}
              size={172}
              strokeWidth={1}
              alt="BriefcaseBusiness"
            />
            TRABALHISTA
          </Card>
          <Card description="Questões civis envolvem patrimônio, família, contratos e responsabilidades do dia a dia. Nossa atuação é baseada em soluções seguras e estratégicas para proteger seus interesses.">
            <AppIcon
              icon={FileText}
              size={172}
              strokeWidth={1}
              alt="FileText"
            />
            CÍVEL
          </Card>
          <Card description="Comprar, vender ou regularizar um imóvel exige segurança jurídica e atenção aos detalhes. Atuamos para prevenir conflitos e proteger seu patrimônio em todas as fases do processo.">
            <AppIcon icon={House} size={172} strokeWidth={1} alt="House" />
            IMOBILIÁRIO
          </Card>
          <Card description="Conflitos em condomínios exigem equilíbrio entre regras, direitos e convivência. Atuamos na prevenção e resolução de disputas com foco na harmonia e segurança jurídica.">
            <AppIcon icon={Hotel} size={172} strokeWidth={1} alt="Hotel" />
            CONDOMINIAL
          </Card>
        </div>
      </Section>
    </>
  );
}
