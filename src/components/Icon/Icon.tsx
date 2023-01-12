import React from "react";

export type IconSize = "2xs" | "xs" | "sm" | "lg" | "xl" | "2xl";
export type IconForm = "solid" | "regular" | "light";

interface props {
  iconColor?: string;
  iconSize?: IconSize;
  iconForm?: IconForm;
  iconName: string;
}

const Icon = ({
  iconColor = "black",
  iconSize = "sm",
  iconForm = "solid",
  iconName,
}: props) => {
  const iconDesign: React.CSSProperties = {
    color: iconColor,
  };

  return (
    <span className="icon-container" style={iconDesign}>
      <i className={`fa-${iconForm} fa-${iconName}  fa-${iconSize}`}></i>
    </span>
  );
};

export { Icon };
