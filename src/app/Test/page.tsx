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

//Images
import Logo from "../../../public/Logo_Alves_E_Pimentel.svg";

//Actions
import { goToWhatsapp } from "../actions";
import Title from "../components/Title";

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
      <Pattern
        className={`w-full h-[64px] bg-[url('/pattern_1.svg')] bg-repeat bg-contain`}
      />
      <Section
        id={"about"}
        className="my-8 min-[660px]:my-12 font-crimson-pro text-primary max-[1200px]:px-8 min-[1200px]:px-[128px]"
      >
        <Title>QUEM SOMOS?</Title>
        <p className="text-center text-2xl">
          Acreditamos que cada caso é mais do que um processo, é uma parte da
          vida de alguém. Buscamos entregar segurança, clareza e resultados
          reais para quem confia em nosso trabalho, com ética, atenção aos
          detalhes e uma escuta ativa, construímos relações sólidas com nossos
          clientes e enfrentamos cada desafio com estratégia e responsabilidade.
          Aqui, você é ouvido. E o seu direito, respeitado.
        </p>
      </Section>
      <Pattern
        className={`w-full h-[64px] bg-[url('/pattern_1.svg')] bg-repeat bg-contain rotate-180 scale-x-[-1]`}
      />
      <Hr />
      <Section
        id="services"
        className="my-8 min-[660px]:my-12 font-crimson-pro text-primary max-[1200px]:px-8 min-[1200px]:px-[128px]"
      >
        <Title>ÁREAS DE ATUAÇÃO</Title>
      </Section>
    </>
  );
}
