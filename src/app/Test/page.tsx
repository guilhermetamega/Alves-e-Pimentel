import Header from "../components/Header";
import Hr from "../components/Hr";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Image from "next/image";
import Logo from "../../../public/Logo_Alves_E_Pimentel.svg";
import Section from "../components/Section";
import TwoColorsText from "../components/TwoColorsText";
import Button from "../components/Button";
import { goToWhatsapp } from "../actions";
import NoGapDiv from "../components/NoGapDiv";

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
        className={`bg-[url("/bg_hero.png")] aspect-auto bg-no-repeat bg-cover bg-center px-32 pt-24 pb-[280px] flex flex-col justify-start font-crimson-pro text-6xl gap-8`}
        id={"hero"}
      >
        <NoGapDiv col={true}>
          <TwoColorsText
            colorOne={"gray-light"}
            colorTwo={"text-secondary-repeat"}
            firstText={"COMPROMISSO COM O"}
            secondText={"SEU DIREITO"}
            space={true}
          />
          <TwoColorsText
            colorOne={"gray-light"}
            colorTwo={"text-secondary-repeat"}
            firstText={"ATENÇÃO COM A"}
            secondText={"SUA HISTÓRIA"}
            space={true}
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
    </>
  );
}
