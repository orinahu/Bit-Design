import "./MainListBottomLeftItem.css";
import { Icon, IconSize, IconStyle } from "../../in";
import { Text, TextSize } from "../../in";
import { dateFormatMainList } from "../../helper/date";

interface props {
  iconName?: string;
  iconColor: string;
  iconSize?: IconSize;
  iconStyle?: IconStyle;
  textSize?: TextSize;
  textColor?: string;
  mainListDate: Date;
}

const MainListBottomLeftItem = ({
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
        textColor={textColor}
        textValue={dateFormatMainList(mainListDate)}
        textSize={textSize}
      />
    </div>
  );
};

export { MainListBottomLeftItem };
