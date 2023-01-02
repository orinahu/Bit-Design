import "./MainListBottomLeftItem.css";
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

const MainListBottomLeftItem = ({
  iconColor = "red",
  iconSize = "lg",
  iconStyle,
  iconName = "calendar",
  textValue,
  textSize = "small",
  textColor = "#606060",
}: props) => {
  return (
    <div className="main-list-upper-left-container">
      <Text textColor={textColor} textValue={textValue} textSize={textSize} />
      <Icon
        iconName={iconName}
        iconStyle={iconStyle}
        iconSize={iconSize}
        iconColor={iconColor}
      />
    </div>
  );
};

export { MainListBottomLeftItem };
