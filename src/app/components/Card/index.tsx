import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  description?: string;
  className?: string;
};

// src/app/components/Card/index.tsx

export default function Card({ children, description, className }: Props) {
  return (
    <div
      className={`
        ${className ?? ""}
        group relative
        w-full
        max-w-[320px]          /* mobile bem tranquilo */
        min-[480px]:max-w-[360px]
        min-[800px]:max-w-[400px]
        h-[446px] min-[1400px]:h-[400px]
        flex flex-col items-center
        bg-primary border-4 border-secondary
        rounded-md
        font-lato font-bold text-2xl text-secondary-light
        overflow-hidden
        transition-all duration-500
        max-[660px]:transition-none
      `}
    >
      {/* Bloco principal (ícone + título) */}
      <div
        className="
          absolute max-[800px]:mt-[-64px] inset-0 flex flex-col justify-center items-center gap-4 
          transition-all duration-500 
          group-hover:translate-y-[-60px] group-hover:scale-80 
          max-[660px]:translate-y-[-60px] max-[660px]:scale-80 max-[660px]:transition-none
        "
      >
        {children}
      </div>

      {description && (
        <p
          className="
            absolute bottom-10 px-8 text-base font-lato font-normal text-gray-light text-center 
            opacity-0 translate-y-6 transition-all duration-500 
            group-hover:opacity-100 group-hover:translate-y-0 
            max-[660px]:opacity-100 max-[660px]:translate-y-0 max-[660px]:transition-none
          "
        >
          {description}
        </p>
      )}
    </div>
  );
}

