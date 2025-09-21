import Space from "./utils";

type Props = {
  colorOne: string;
  colorTwo: string;
  firstText: string;
  secondText: string;
  space?: boolean;
};

export default function TwoColorsText({
  colorOne,
  colorTwo,
  firstText,
  secondText,
  space,
}: Props) {
  return (
    <div
      className={`flex flex-row max-[1000px]:justify-center min-[1000px]:justify-start`}
    >
      <p className={`text-${colorOne}`}>{firstText}</p>
      {space == true ? <Space /> : ""}
      <p className={colorTwo}>{secondText}</p>
    </div>
  );
}
