import "./Text.css";

export type TextSize = "small" | "medium" | "large";

interface props {
  textValue: string;
  textSize?: TextSize;
}

const Text = ({ textValue, textSize = "medium" }: props) => {
  return <span className={`text-text ${textSize}`}>{textValue}</span>;
};

export { Text };
