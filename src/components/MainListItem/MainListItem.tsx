import {
  MainListBottomLeftItem,
  MainListUpperLeftItem,
  MainListLeftItem,
} from "../../in";
import { TextSize, IconSize, IconStyle, CircleSize } from "../../in";
import "./MainListItem.css";

interface props {
  bottomLeftIconName?: string;
  bottomLeftIconColor: string;
  bottomLeftIconSize?: IconSize;
  bottomLeftIconStyle?: IconStyle;
  bottomLeftTextSize?: TextSize;
  bottomLeftTextColor?: string;
  bottomLeftMainListDate: Date;
  upperLeftIconName?: string;
  upperLeftIconColor?: string;
  upperLeftIconSize?: IconSize;
  upperLeftIconStyle?: IconStyle;
  upperLeftTextValue: string;
  upperLeftTextSize?: TextSize;
  upperLeftTextColor?: string;
  leftItemCircleColor: string;
  leftItemIconColor?: string;
  leftItemIconSize?: IconSize;
  leftItemIconStyle?: IconStyle;
  leftItemIconName?: string;
  leftItemTextValue: string;
  leftItemTextSize?: TextSize;
  leftItemCircleSize?: CircleSize;
  leftItemTextColor?: string;
  selected?: boolean;
}

const MainListItem = ({
  bottomLeftIconName,
  bottomLeftIconColor,
  bottomLeftIconSize,
  bottomLeftIconStyle,
  bottomLeftTextSize,
  bottomLeftTextColor,
  bottomLeftMainListDate,
  upperLeftIconName,
  upperLeftIconColor,
  upperLeftIconSize,
  upperLeftIconStyle,
  upperLeftTextValue,
  upperLeftTextSize,
  upperLeftTextColor,
  leftItemCircleColor,
  leftItemIconColor,
  leftItemIconSize,
  leftItemIconStyle,
  leftItemIconName,
  leftItemTextValue,
  leftItemTextSize,
  leftItemCircleSize,
  leftItemTextColor,
  selected = false,
}: props) => {
  return (
    <div className={`main-list-item-container ${selected && "selected"}`}>
      <div className="main-list-right-item-container">
        <MainListLeftItem
          circleColor={leftItemCircleColor}
          iconColor={leftItemIconColor}
          iconStyle={leftItemIconStyle}
          iconName={leftItemIconName}
          textValue={leftItemTextValue}
          textSize={leftItemTextSize}
          circleSize={leftItemCircleSize}
          textColor={leftItemTextColor}
          iconSize={leftItemIconSize}
        />
      </div>
      <div className="main-list-left-item-container">
        <MainListUpperLeftItem
          iconColor={upperLeftIconColor}
          iconSize={upperLeftIconSize}
          iconStyle={upperLeftIconStyle}
          iconName={upperLeftIconName}
          textValue={upperLeftTextValue}
          textSize={upperLeftTextSize}
          textColor={upperLeftTextColor}
        />
        <div className="main-list-right-item-divider"></div>
        <MainListBottomLeftItem
          iconColor={bottomLeftIconColor}
          iconSize={bottomLeftIconSize}
          iconStyle={bottomLeftIconStyle}
          iconName={bottomLeftIconName}
          mainListDate={bottomLeftMainListDate}
          textSize={bottomLeftTextSize}
          textColor={bottomLeftTextColor}
        />
      </div>
    </div>
  );
};

export { MainListItem };
