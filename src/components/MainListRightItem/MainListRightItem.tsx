import "./MainListRightItem.css";
import { TrafficLights, CircleSize } from "../../in";
import { Icon, IconSize, IconStyle } from "../../in";
import { Text, TextSize } from "../../in";

interface props {
  circleColor: string;
  iconColor?: string;
  iconSize?: IconSize;
  iconStyle?: IconStyle;
  iconName: string;
  textValue: string;
  textSize?: TextSize;
  circleSize?: CircleSize;
}

const MainListRightItem = ({
  circleColor,
  iconColor,
  iconSize = "lg",
  iconStyle,
  iconName,
  textValue,
  textSize,
  circleSize,
}: props) => {
  return (
    <div className="main-list-right-container">
      <Text textValue={textValue} textSize={textSize} />
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
