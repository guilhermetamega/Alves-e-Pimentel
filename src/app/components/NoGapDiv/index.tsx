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
      } max-[660px]:gap-${maxGap} min-[660px]:gap-${minGap}`}
      {...rest}
    >
      {children}
    </div>
  );
}
