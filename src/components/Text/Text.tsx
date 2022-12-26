import React from "react";
import "./Text.css";

interface props {
  text: string;
  small?: boolean | null;
  medium?: boolean | null;
  large?: boolean | null;
}

const Text = ({ text, small, medium, large }: props) => {
  return (
    <span
      className={`text-text ${small && "small"} ${medium && "medium"} ${
        large && "large"
      }`}
    >
      {text}
    </span>
  );
};

export { Text};
