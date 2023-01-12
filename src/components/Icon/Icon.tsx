import React from "react";

export type IconSize = "2xs" | "xs" | "sm" | "lg" | "xl" | "2xl";
export type IconForm = "solid" | "regular" | "light";

interface props {
  iconColor?: string;
  iconSize?: IconSize;
  iconForm?: IconForm;
  iconName: string;
  style?: React.CSSProperties;
  className?: string;
}

const Icon = ({
  iconColor = "black",
  iconSize = "sm",
  iconForm = "solid",
  iconName,
  style,
  className,
}: props) => {
  const iconDesign: React.CSSProperties = {
    color: iconColor,
    ...style,
  };

  return (
    <span className={`bit-icon-container ${className}`} style={iconDesign}>
      <i className={`fa-${iconForm} fa-${iconName}  fa-${iconSize}`}></i>
    </span>
  );
};

export { Icon };
