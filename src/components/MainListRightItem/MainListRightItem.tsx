import "./MainListRightItem.css";
import { TrafficLights } from "../../in";
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
}

const MainListRightItem = ({
  circleColor,
  iconColor,
  iconSize = "lg",
  iconStyle,
  iconName,
  textValue,
  textSize,
}: props) => {
  return (
    <div className="main-list-right-container">
      <Text textValue={textValue} textSize={textSize} />
      <Icon iconName={iconName} iconStyle={iconStyle} iconSize={iconSize} iconColor={iconColor} />
      <TrafficLights circleColor={circleColor} />
    </div>
  );
};

export { MainListRightItem };
