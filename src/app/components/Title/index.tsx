import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export default function Title({ children }: Props) {
  return (
    <h1 className="text-3xl min-[660px]:text-4xl text-center pb-4 min-[660px]:pb-8">
      {children}
    </h1>
  );
}
