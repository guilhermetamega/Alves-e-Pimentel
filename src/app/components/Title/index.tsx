import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  id?: string;
  level?: 1 | 2 | 3;
};

export default function Title({
  children,
  className = "",
  id,
  level = 2,
}: Props) {
  const Heading = `h${level}` as const;

  return (
    <Heading
      id={id}
      className={`font-crimson-pro text-center text-[1.625rem] leading-tight md:text-4xl ${className}`}
    >
      {children}
    </Heading>
  );
}
