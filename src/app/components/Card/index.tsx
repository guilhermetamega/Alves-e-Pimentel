import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  className?: string;
};

export default function Card({ children, className, ...res }: Props) {
  return (
    <div
      className={`${className} w-[400px] h-[400px] flex flex-col justify-center items-center bg-primary border-4 border-secondary rounded-md gap-4 font-lato font-bold text-2xl text-secondary-light`}
      {...res}
    >
      {children}
    </div>
  );
}
