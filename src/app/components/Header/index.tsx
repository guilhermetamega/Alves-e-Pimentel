import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  id?: string;
  className?: string;
};

export default function Header({ children, id, className = "" }: Props) {
  return (
    <header id={id} className={`bg-primary-dark ${className}`}>
      {children}
    </header>
  );
}
