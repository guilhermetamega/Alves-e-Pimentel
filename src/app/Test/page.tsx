import Header from "../components/Header";
import Hr from "../components/Hr";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Image from "next/image";
import Logo from "../../../public/Logo_Alves_E_Pimentel.svg";
import Section from "../components/Section";
import TwoColorsText from "../components/TwoColorsText";

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
        className={`bg-[url("/bg_hero.png")] aspect-auto bg-no-repeat bg-cover bg-center px-32 pt-24 pb-[208px] flex flex-col justify-start font-crimson-pro text-5xl
`}
        id={"hero"}
      >
        <TwoColorsText
          colorOne={"gray-light"}
          colorTwo={"secondary-repeat"}
          firstText={"COMPROMISSO COM O"}
          secondText={"SEU DIREITO"}
          space={true}
        />
        <TwoColorsText
          colorOne={"gray-light"}
          colorTwo={"secondary-repeat"}
          firstText={"ATENÇÃO COM A"}
          secondText={"SUA HISTÓRIA"}
          space={true}
        />
      </Section>
      <Hr />
    </>
  );
}
