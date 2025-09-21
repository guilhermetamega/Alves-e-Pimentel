import { ButtonHTMLAttributes, ReactNode } from "react";

type Props = {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  onClick,
  className,
  ...rest
}: Props) {
  return (
    <button className={`${className}`} onClick={onClick} {...rest}>
      {children}
    </button>
  );
}
