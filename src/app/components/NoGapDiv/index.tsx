import { ReactNode } from "react";

type Props = {
  gap?: string;
  col?: boolean;
  children?: ReactNode;
};

export default function NoGapDiv({ gap, col, children, ...rest }: Props) {
  return (
    <div
      className={`flex flex-${col == true ? "col" : "row"} gap-${gap}`}
      {...rest}
    >
      {children}
    </div>
  );
}
