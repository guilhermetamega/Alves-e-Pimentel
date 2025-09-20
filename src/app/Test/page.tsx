import Header from "../components/Header";
import Hr from "../components/Hr";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Image from "next/image";
import Logo from "../../../public/Logo_Alves_E_Pimentel.svg";
//import Section from "../components/Section";

export default function Test() {
  return (
    <>
      <Header id={"inicio"} bgColor="primary">
        <Navbar>
          <Link
            href="/Test"
            className=" max-[960px]:pointer-events-none max-[960px]:cursor-default"
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
    </>
  );
}
