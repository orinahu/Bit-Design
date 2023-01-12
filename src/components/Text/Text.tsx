import React from "react";
import "./Text.css";

export type Size = "small" | "medium" | "large";

interface props {
  text: string;
  size?: Size;
  color?: string;
  style?: React.CSSProperties 
}

const Text = ({
  text,
  size = "medium",
  style
}: props) => {
  const propStyle: React.CSSProperties = {
    ...style
  };

  return (
    <span style={propStyle} className={`bit-text ${size}`}>
      {text}
    </span>
  );
};

export { Text };
