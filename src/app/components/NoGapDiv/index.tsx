import { ReactNode } from "react";

type Props = {
  minGap?: string;
  maxGap?: string;
  col?: boolean;
  children?: ReactNode;
};

export default function NoGapDiv({
  minGap,
  maxGap,
  col,
  children,
  ...rest
}: Props) {
  return (
    <div
      className={`flex flex-${
        col == true ? "col" : "row"
      } gap-${minGap} max-[660px]:gap-${maxGap}`}
      {...rest}
    >
      {children}
    </div>
  );
}
