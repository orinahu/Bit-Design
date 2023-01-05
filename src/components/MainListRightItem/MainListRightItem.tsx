import "./MainListRightItem.css";
import { TrafficLights, CircleSize } from "../../in";
import { Icon, IconSize, IconStyle } from "../../in";
import { Text, TextSize } from "../../in";

interface props {
  circleColor: string;
  iconColor?: string;
  iconSize?: IconSize;
  iconStyle?: IconStyle;
  iconName?: string;
  textValue: string;
  textSize?: TextSize;
  circleSize?: CircleSize;
  textColor?: string;
}

const MainListRightItem = ({
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
      <Text textColor={textColor} textValue={textValue} textSize={textSize} />
      <Icon
        iconName={iconName}
        iconStyle={iconStyle}
        iconSize={iconSize}
        iconColor={iconColor}
      />
      <TrafficLights circleColor={circleColor} circleSize={circleSize} />
    </div>
  );
};

export { MainListRightItem };

