import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  className?: string;
};

export default function Title({ children, className }: Props) {
  return (
    <h1
      className={`text-3xl min-[660px]:text-4xl text-center mb-12 ${className}`}
    >
      {children}
    </h1>
  );
}
