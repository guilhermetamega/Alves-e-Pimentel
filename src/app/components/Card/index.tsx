import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  description: string;
  title: string;
  className?: string;
};

export default function Card({
  children,
  description,
  title,
  className = "",
}: Props) {
  return (
    <article
      className={`flex min-h-[20rem] w-full flex-col items-center justify-center gap-4 rounded-lg border-2 border-secondary bg-primary-dark p-7 text-center shadow-[0_4px_12px_rgba(0,0,0,0.25)] ${className}`}
    >
      {children}
      <h3 className="font-lato text-lg font-bold text-secondary-light">
        {title}
      </h3>
      <p className="max-w-[32rem] font-lato text-sm leading-relaxed text-gray-light md:text-base">
        {description}
      </p>
    </article>
  );
}

