import "./Text.css";

export type TextSize = "small" | "medium" | "large";

interface props {
  textValue: string;
  size?: TextSize;
}

const Text = ({ textValue, size='medium' }: props) => {
  return <span className={`text-text ${size}`}>{textValue}</span>;
};

export { Text };
