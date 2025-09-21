import { HTMLAttributes, ReactNode } from "react";

type Props = {
  children?: ReactNode;
  className?: string;
} & HTMLAttributes<HTMLDivElement>;

export default function Pattern({ children, className, ...rest }: Props) {
  return (
    <div className={className} {...rest}>
      {children}
    </div>
  );
}
