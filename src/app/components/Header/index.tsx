import { ReactNode } from "react";
import Link from "next/link";
import Navbar from "../Navbar";
import Image from "next/image";
import Logo from "../../../../public/Logo_Alves_E_Pimentel.svg";

type Props = {
  children?: ReactNode;
  id: string;
  className?: string;
  bgColor?: string;
};

export default function Header({ children, id, className, bgColor }: Props) {
  return (
    <header
      id={id}
      className={`flex flex-col items-center bg-${bgColor} ${className} min-[1080px]:px-[128px] font-crimson-pro`}
      aria-labelledby={`${id}-title`}
    >
      <Navbar>
        <Link
          href="/Test"
          className=" min-[720px]:pointer-events-none min-[720px]:cursor-default"
        >
          <Image
            src={Logo}
            className="w-[156px] h-[68px]"
            alt="Logo Alves e Pimentel"
          />
        </Link>
      </Navbar>
    </header>
  );
}
