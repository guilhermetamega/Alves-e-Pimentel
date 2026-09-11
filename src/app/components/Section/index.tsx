import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  id: string;
  className?: string;
  labelledBy?: string;
};

export default function Section({
  children,
  id,
  className = "",
  labelledBy,
}: Props) {
  return (
    <section id={id} className={className} aria-labelledby={labelledBy}>
      {children}
    </section>
  );
}
