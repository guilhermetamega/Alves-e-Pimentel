import { ChevronDown } from "lucide-react";
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
      className={`service-card relative isolate flex min-h-[20rem] w-full flex-col items-center justify-center gap-4 overflow-hidden rounded-lg border-2 border-secondary bg-primary-dark p-7 text-center shadow-[0_4px_12px_rgba(0,0,0,0.25)] ${className}`}
      tabIndex={0}
    >
      <div className="service-card__lead flex flex-col items-center gap-4">
        <div className="service-card__icon">{children}</div>
        <h3 className="service-card__title font-lato text-lg font-bold text-secondary-light">
          {title}
        </h3>
      </div>
      <p className="service-card__description max-w-[32rem] font-lato text-sm leading-relaxed text-gray-light md:text-base">
        {description}
      </p>
      <span className="service-card__hint" aria-hidden="true">
        <ChevronDown className="size-7" strokeWidth={1.5} />
      </span>
    </article>
  );
}

