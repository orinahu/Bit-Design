import React from "react";

type IconSize = "2xs" | "xs" | "sm" | "lg" | "xl" | "2xl";

interface props {
  iconColor?: string;
  iconSize?: IconSize;
  iconName: string;
}

const Icon = ({ iconColor = "black", iconSize = "sm", iconName }: props) => {
  const iconStyle: React.CSSProperties = {
    color: iconColor,
  };

  return (
    <span className="icon-container" style={iconStyle}>
      <i className={`fa-solid fa-${iconName}  fa-${iconSize}`}></i>
    </span>
  );
};

export { Icon };
