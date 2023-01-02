import React from "react";

export type IconSize = "2xs" | "xs" | "sm" | "lg" | "xl" | "2xl";
export type IconStyle = "solid" | "regular" | "light";

interface props {
  iconColor?: string;
  iconSize?: IconSize;
  iconStyle?: IconStyle;
  iconName: string;
}

const Icon = ({
  iconColor = "black",
  iconSize = "sm",
  iconStyle = "solid",
  iconName,
}: props) => {
  const iconDesign: React.CSSProperties = {
    color: iconColor,
  };

  return (
    <span className="icon-container" style={iconDesign}>
      <i className={`fa-${iconStyle} fa-${iconName}  fa-${iconSize}`}></i>
    </span>
  );
};

export { Icon };
