import React from "react";
import "./Text.css";

export type TextSize = "small" | "medium" | "large";

interface props {
  textValue: string;
  textSize?: TextSize;
  textColor?: string;
}

const Text = ({
  textColor = "black",
  textValue,
  textSize = "medium",
}: props) => {
  const style: React.CSSProperties = {
    color: textColor,
  };

  return (
    <span style={style} className={`text-text ${textSize}`}>
      {textValue}
    </span>
  );
};

export { Text };
