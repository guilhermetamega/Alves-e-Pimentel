import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  description?: string;
  className?: string;
};

export default function Card({ children, description, className }: Props) {
  return (
    <div
      className={`${className} group relative w-[400px] h-[400px] flex flex-col items-center bg-primary border-4 border-secondary rounded-md font-lato font-bold text-2xl text-secondary-light overflow-hidden transition-all duration-500`}
    >
      {/* Bloco principal (ícone + título) */}
      <div className="absolute inset-0 flex flex-col justify-center items-center gap-4 transition-all duration-500 group-hover:translate-y-[-60px] group-hover:scale-80">
        {children}
      </div>

      {/* Descrição (só aparece no hover) */}
      {description && (
        <p className="absolute bottom-10 px-8 text-base font-lato font-normal text-gray-light text-center opacity-0 translate-y-6 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
          {description}
        </p>
      )}
    </div>
  );
}
