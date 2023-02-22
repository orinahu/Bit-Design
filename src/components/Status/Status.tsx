import "./Status.css";
import { TrafficLight } from "../../in";
import { Icon, IconSize, IconForm } from "../../in";
import { Text, Size } from "../../in";

interface props {
  circleColor: string;
  iconColor?: string;
  iconSize?: IconSize;
  iconForm?: IconForm;
  iconName?: string;
  text: string;
  size?: Size;
  className?: string;
  style?: React.CSSProperties;
}

const Status = ({
  circleColor,
  iconColor,
  iconSize = "lg",
  iconForm,
  iconName = "image",
  text,
  size ='small',
  className,
  style,
}: props) => {
  return (
    <div className={`bit-status ${className}`} style={style}>
      <TrafficLight circleColor={circleColor} size={size} />
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

export { Status };
