import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import Logo from "../../../../public/Logo_Alves_E_Pimentel.svg";
import { siteConfig } from "../../site-config";

type Props = {
  title: string;
  children: ReactNode;
};

export default function LegalPageShell({ title, children }: Props) {
  return (
    <>
      <header className="border-b-4 border-secondary bg-primary px-5 py-5 sm:px-8">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-5">
          <Link href="/" aria-label="Voltar para a página inicial">
            <Image
              src={Logo}
              width={156}
              height={68}
              alt={siteConfig.shortName}
              className="h-auto w-[126px]"
              priority
            />
          </Link>
          <Link
            href="/"
            className="font-lato text-sm text-gray-light underline-offset-4 hover:underline"
          >
            Página inicial
          </Link>
        </div>
      </header>

      <main className="px-5 py-12 sm:px-8 sm:py-16">
        <article className="mx-auto max-w-3xl font-lato text-base leading-relaxed text-gray">
          <h1 className="font-crimson-pro text-4xl font-bold text-primary sm:text-5xl">
            {title}
          </h1>
          <p className="mt-3 text-sm text-gray">Última atualização: 11/09/2026.</p>
          <div className="mt-10 space-y-8 [&_a]:font-bold [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-4 [&_h2]:font-crimson-pro [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-primary [&_p]:mt-3">
            {children}
          </div>
        </article>
      </main>

      <footer className="border-t-4 border-secondary bg-primary px-5 py-8 text-center font-lato text-sm text-gray-light sm:px-8">
        <nav aria-label="Documentos legais" className="flex flex-wrap justify-center gap-5">
          <Link href="/privacidade" className="underline-offset-4 hover:underline">
            Aviso de privacidade
          </Link>
          <Link href="/aviso-legal" className="underline-offset-4 hover:underline">
            Aviso legal
          </Link>
        </nav>
        <p className="mt-5">
          © {new Date().getFullYear()} {siteConfig.shortName}. Todos os direitos reservados.
        </p>
      </footer>
    </>
  );
}
