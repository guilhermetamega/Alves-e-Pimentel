import Space from "./space";

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
    <div className={`flex flex-row`}>
      <p className={`text-${colorOne}`}>{firstText}</p>
      {space == true ? <Space /> : ""}
      <p className={`text-${colorTwo}`}>{secondText}</p>
    </div>
  );
}
