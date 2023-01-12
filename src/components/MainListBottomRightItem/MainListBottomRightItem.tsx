import "./MainListBottomRightItem.css";
import { Icon, IconSize, IconStyle } from "../../in";
import { Text, Size } from "../../in";
import { dateFormatMainList } from "../../helper/helper";

interface props {
  iconName?: string;
  iconColor: string;
  iconSize?: IconSize;
  iconStyle?: IconStyle;
  textSize?: Size;
  textColor?: string;
  mainListDate: Date;
}

const MainListBottomRightItem = ({
  iconColor = "red",
  iconSize = "lg",
  iconStyle,
  iconName = "calendar",
  mainListDate,
  textSize = "small",
  textColor = "#606060",
}: props) => {
  return (
    <div className="main-list-upper-left-container">
      <Icon
        iconName={iconName}
        iconStyle={iconStyle}
        iconSize={iconSize}
        iconColor={iconColor}
      />
      <Text
        color={textColor}
        text={dateFormatMainList(mainListDate)}
        size={textSize}
      />
    </div>
  );
};

export { MainListBottomRightItem };
