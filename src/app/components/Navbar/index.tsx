import { Menu } from "lucide-react";
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
      className="relative mx-auto flex w-full max-w-[90rem] items-center justify-between px-4 py-3 sm:px-8 lg:px-16"
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

      <details className="group lg:hidden">
        <summary
          className="flex size-12 cursor-pointer list-none items-center justify-center rounded-md border border-secondary text-secondary"
          aria-label="Abrir menu principal"
        >
          <Menu aria-hidden="true" />
        </summary>
        <ul className="absolute inset-x-4 top-[calc(100%+0.375rem)] z-30 overflow-hidden rounded-lg border border-primary bg-primary-dark p-2 shadow-xl sm:left-auto sm:right-8 sm:w-72">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className={linkClassName}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </details>
    </nav>
  );
}
