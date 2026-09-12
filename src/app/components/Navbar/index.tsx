import Link from "next/link";
import { ReactNode } from "react";
import links from "./links";

type Props = {
  children: ReactNode;
};

const linkClassName =
  "block rounded-md px-4 py-3 font-crimson-pro text-base text-gray-light transition-colors hover:bg-primary hover:text-secondary focus-visible:text-secondary";

export default function Navbar({ children }: Props) {
  return (
    <nav
      className="relative mx-auto flex w-full max-w-[90rem] items-center justify-center px-4 py-3 sm:px-8 lg:justify-between lg:px-16"
      aria-label="Menu principal"
    >
      {children}
      <ul className="hidden items-center gap-1 lg:flex">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={
                link.label === "CONTATO"
                  ? `${linkClassName} bg-secondary text-primary-dark hover:bg-secondary-light hover:text-primary-dark`
                  : linkClassName
              }
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
