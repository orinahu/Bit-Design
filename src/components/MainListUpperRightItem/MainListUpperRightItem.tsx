import "./MainListUpperRightItem.css";
import { Icon, IconSize, IconStyle } from "../../in";
import { Text, TextSize } from "../../in";

interface props {
  iconName?: string;
  iconColor?: string;
  iconSize?: IconSize;
  iconStyle?: IconStyle;
  textValue: string;
  textSize?: TextSize;
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
      <Text textColor={textColor} textValue={textValue} textSize={textSize} />
    </div>
  );
};

export { MainListUpperRightItem };
