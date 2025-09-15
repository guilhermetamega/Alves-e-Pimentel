import Image from "next/image";
import Logo from "../../public/Logo_Alves_E_Pimentel.svg";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-full dark:text-gray-light">
      <Image
        src={Logo}
        width={500}
        className="min-[320px]:w-1/2 min-[720px]:w-3/8"
        alt="Logo Alves e Pimentel"
      />
      <h1 className="min-[320px]:text-2xl md:text-5xl mt-18 font-lato font-light">
        Em Breve
      </h1>
    </div>
  );
}
