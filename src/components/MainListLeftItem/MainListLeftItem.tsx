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
  size?: Size;
  circleSize?: Size;
}

const MainListLeftItem = ({
  circleColor,
  iconColor,
  iconSize = "lg",
  iconStyle,
  iconName = "image",
  textValue,
  size,
}: props) => {
  return (
    <div className="main-list-right-container">
      <TrafficLight circleColor={circleColor} size={size} />
      <Icon
        iconName={iconName}
        iconForm={iconStyle}
        iconSize={iconSize}
        iconColor={iconColor}
      />
      <Text text={textValue} size={size} />
    </div>
  );
};

export { MainListLeftItem };
