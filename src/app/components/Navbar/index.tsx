import Link from "next/link";
import { ReactNode } from "react";
import links from "./links";

type Props = {
  children?: ReactNode;
};

export default function Navbar({ children }: Props) {
  return (
    <nav
      className="flex flex-row w-full items-center justify-around p-4"
      aria-label="Menu principal"
    >
      {children}
      <ul className="hidden md:flex gap-4">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`transition-colors p-[16px] rounded-md text-xl ${
                link.label == "CONTATO"
                  ? "bg-secondary text-primary-dark hover:bg-primary-dark hover:text-gray-light"
                  : "text-gray-light hover:bg-primary-dark"
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
