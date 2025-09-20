import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  id: string;
  className?: string;
  bgColor?: string;
};

export default function Header({ children, id, className, bgColor }: Props) {
  return (
    <header
      id={id}
      className={`flex flex-col items-center bg-${bgColor} ${className} max-[1200px]:px-[64px] min-[1200px]:px-[128px] font-crimson-pro`}
      aria-labelledby={`${id}-title`}
    >
      {children}
    </header>
  );
}
