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
}

const DateTime = ({
  iconColor = "red",
  iconSize = "lg",
  iconForm,
  iconName = "calendar",
  date,
  text = "small",
  className
}: props) => {
  return (
    <div className={`main-list-upper-left-container ${className}`}>
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
