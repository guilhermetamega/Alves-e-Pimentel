import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  id: string;
  className?: string;
  bgColor?: string;
};

export default function Section({ children, id, className, bgColor }: Props) {
  return (
    <section
      id={id}
      className={`flex flex-col bg-${bgColor} ${className}`}
      aria-labelledby={`${id}-title`}
    >
      {children}
    </section>
  );
}
