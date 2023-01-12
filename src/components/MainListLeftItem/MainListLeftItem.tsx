import "./MainListLeftItem.css";
import { TrafficLights } from "../../in";
import { Icon, IconSize, IconStyle } from "../../in";
import { Text, Size } from "../../in";

interface props {
  circleColor: string;
  iconColor?: string;
  iconSize?: IconSize;
  iconStyle?: IconStyle;
  iconName?: string;
  textValue: string;
  textSize?: Size;
  circleSize?: Size;
  textColor?: string;
}

const MainListLeftItem = ({
  circleColor,
  iconColor,
  iconSize = "lg",
  iconStyle,
  iconName = "image",
  textValue,
  textSize,
  circleSize,
  textColor,
}: props) => {
  return (
    <div className="main-list-right-container">
      <TrafficLights circleColor={circleColor} size={circleSize} />
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

export { MainListLeftItem };
