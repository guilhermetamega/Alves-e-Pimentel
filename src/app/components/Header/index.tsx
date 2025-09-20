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
        {/* Logo */}
        <Link href="/Test" className="md:text-left md:flex-1">
          <Image
            src={Logo}
            className="min-[320px]:w-1/2 min-[720px]:w-[156px] min-[720px]:h-[68px]"
            alt="Logo Alves e Pimentel"
          />
        </Link>
      </Navbar>
    </header>
  );
}
