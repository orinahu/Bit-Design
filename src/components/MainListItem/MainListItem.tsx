import {
  MainListBottomRightItem,
  MainListUpperRightItem,
  MainListLeftItem,
} from "../../in";
import { TextSize, IconSize, IconStyle, CircleSize } from "../../in";
import "./MainListItem.css";

interface props {
  bottomRightIconName?: string;
  bottomRightIconColor: string;
  bottomRightIconSize?: IconSize;
  bottomRightIconStyle?: IconStyle;
  bottomRightTextSize?: TextSize;
  bottomRightTextColor?: string;
  bottomRightMainListDate: Date;
  upperRightIconName?: string;
  upperRightIconColor?: string;
  upperRightIconSize?: IconSize;
  upperRightIconStyle?: IconStyle;
  upperRightTextValue: string;
  upperRightTextSize?: TextSize;
  upperRightTextColor?: string;
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
  bottomRightIconName,
  bottomRightIconColor,
  bottomRightIconSize,
  bottomRightIconStyle,
  bottomRightTextSize,
  bottomRightTextColor,
  bottomRightMainListDate,
  upperRightIconName,
  upperRightIconColor,
  upperRightIconSize,
  upperRightIconStyle,
  upperRightTextValue,
  upperRightTextSize,
  upperRightTextColor,
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
      <div className="main-list-left-item-container">
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
      <div className="main-list-right-item-container">
        <MainListUpperRightItem
          iconColor={upperRightIconColor}
          iconSize={upperRightIconSize}
          iconStyle={upperRightIconStyle}
          iconName={upperRightIconName}
          textValue={upperRightTextValue}
          textSize={upperRightTextSize}
          textColor={upperRightTextColor}
        />
        <div className="main-list-right-item-divider"></div>
        <MainListBottomRightItem
          iconColor={bottomRightIconColor}
          iconSize={bottomRightIconSize}
          iconStyle={bottomRightIconStyle}
          iconName={bottomRightIconName}
          mainListDate={bottomRightMainListDate}
          textSize={bottomRightTextSize}
          textColor={bottomRightTextColor}
        />
      </div>
    </div>
  );
};

export { MainListItem };
