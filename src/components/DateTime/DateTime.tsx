import "./DateTime.css";
import { Icon, IconSize, IconForm } from "../../in";
import { Text, Size } from "../../in";
import { dateFormatMainList } from "../../helper/helper";

interface props {
  iconName?: string;
  iconColor?: string;
  iconSize?: IconSize;
  iconForm?: IconForm;
  text?: Size;
  date: Date;
  className?: string;
  style?: React.CSSProperties;

}

const DateTime = ({
  iconColor = "red",
  iconSize = "lg",
  iconForm,
  iconName = "calendar",
  date,
  text = "small",
  className,
  style
}: props) => {
  return (
    <div className={`bit-date-time ${className}`} style={style}>
      <Icon
        iconName={iconName}
        iconForm={iconForm}
        iconSize={iconSize}
        iconColor={iconColor}
      />
      <Text
        text={dateFormatMainList(date)}
        size={text}
      />
    </div>
  );
};

export { DateTime };
