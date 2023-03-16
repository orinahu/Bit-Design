import "./Id.css";
import React from "react";

import { Icon, IconSize, IconForm } from "../../in";
import { Text, Size } from "../../in";

interface props {
  iconName?: string;
  iconColor?: string;
  iconSize?: IconSize;
  iconForm?: IconForm;
  text: string;
  size?: Size;
  className?: string;
  style?: React.CSSProperties;
}

const Id = ({
  iconColor = "#52517A",
  iconSize = "lg",
  iconForm,
  iconName = "id-card",
  text,
  size = "small",
  className,
  style
}: props) => {
  return (
    <div className={`bit-id ${className}`} style={style}>
      <Icon
        iconName={iconName}
        iconForm={iconForm}
        iconSize={iconSize}
        iconColor={iconColor}
      />
      <Text text={text} size={size} />
    </div>
  );
};

export { Id };
