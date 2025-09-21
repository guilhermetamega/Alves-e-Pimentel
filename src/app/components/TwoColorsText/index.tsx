import Space from "./utils";

type Props = {
  colorOne: string;
  colorTwo: string;
  firstText: string;
  secondText: string;
};

export default function TwoColorsText({
  colorOne,
  colorTwo,
  firstText,
  secondText,
}: Props) {
  return (
    <div
      className={`flex flex-col gap-0 min-[660px]:flex-row max-[1000px]:justify-center min-[1000px]:justify-start`}
    >
      <p className={`text-${colorOne}`}>{firstText}</p>
      <span className="hidden min-[660px]:inline">
        <Space />
      </span>
      <p className={`${colorTwo}`}>{secondText}</p>
    </div>
  );
}
