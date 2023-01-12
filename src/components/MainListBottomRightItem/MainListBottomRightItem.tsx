import "./MainListBottomRightItem.css";
import { Icon, IconSize, IconForm } from "../../in";
import { Text, Size } from "../../in";
import { dateFormatMainList } from "../../helper/helper";

interface props {
  iconName?: string;
  iconColor: string;
  iconSize?: IconSize;
  iconStyle?: IconForm;
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
        iconForm={iconStyle}
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
