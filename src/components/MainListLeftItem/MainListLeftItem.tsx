import "./MainListLeftItem.css";
import { TrafficLight } from "../../in";
import { Icon, IconSize, IconForm } from "../../in";
import { Text, Size } from "../../in";

interface props {
  circleColor: string;
  iconColor?: string;
  iconSize?: IconSize;
  iconStyle?: IconForm;
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
      <TrafficLight circleColor={circleColor} size={circleSize} />
      <Icon
        iconName={iconName}
        iconForm={iconStyle}
        iconSize={iconSize}
        iconColor={iconColor}
      />
      <Text color={textColor} text={textValue} size={textSize} />
    </div>
  );
};

export { MainListLeftItem };
