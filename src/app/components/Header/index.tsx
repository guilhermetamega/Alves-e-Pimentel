import { ReactNode } from "react";
import Link from "next/link";
import Navbar from "../Navbar";

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
      className={`flex flex-col items-center bg-${bgColor} ${className} min-[1080px]:px-[260px] font-crimson-pro`}
      aria-labelledby={`${id}-title`}
    >
      <Navbar>
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-green-600 md:text-left md:flex-1"
        >
          MinhaMarca
        </Link>

        {/* Navbar só aparece no desktop */}
      </Navbar>
    </header>
  );
}
