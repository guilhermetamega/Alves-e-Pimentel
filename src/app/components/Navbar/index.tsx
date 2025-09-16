import Link from "next/link";
import { ReactNode } from "react";
import links from "./links";

type Props = {
  children?: ReactNode;
};

export default function Navbar({ children }: Props) {
  return (
    <nav
      className="flex flex-row w-full items-center justify-between p-4"
      aria-label="Menu principal"
    >
      <ul className="hidden md:flex gap-6">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
        {children}
      </ul>
    </nav>
  );
}
