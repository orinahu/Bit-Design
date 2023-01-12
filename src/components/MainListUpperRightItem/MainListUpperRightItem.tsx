import "./MainListUpperRightItem.css";
import { Icon, IconSize, IconStyle } from "../../in";
import { Text, Size } from "../../in";

interface props {
  iconName?: string;
  iconColor?: string;
  iconSize?: IconSize;
  iconStyle?: IconStyle;
  textValue: string;
  textSize?: Size;
  textColor?: string;
}

const MainListUpperRightItem = ({
  iconColor = "#52517A",
  iconSize = "lg",
  iconStyle,
  iconName = "id-card",
  textValue,
  textSize = "small",
  textColor = "#606060",
}: props) => {
  return (
    <div className="main-list-upper-left-container">
      <Icon
        iconName={iconName}
        iconStyle={iconStyle}
        iconSize={iconSize}
        iconColor={iconColor}
      />
      <Text color={textColor} text={textValue} size={textSize} />
    </div>
  );
};

export { MainListUpperRightItem };
