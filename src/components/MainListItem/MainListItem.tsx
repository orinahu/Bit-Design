import {
  MainListBottomLeftItem,
  MainListUpperLeftItem,
  MainListRightItem,
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
  rightItemCircleColor: string;
  rightItemIconColor?: string;
  rightItemIconSize?: IconSize;
  rightItemIconStyle?: IconStyle;
  rightItemIconName?: string;
  rightItemTextValue: string;
  rightItemTextSize?: TextSize;
  rightItemCircleSize?: CircleSize;
  rightItemTextColor?: string;
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
  rightItemCircleColor,
  rightItemIconColor,
  rightItemIconSize,
  rightItemIconStyle,
  rightItemIconName,
  rightItemTextValue,
  rightItemTextSize,
  rightItemCircleSize,
  rightItemTextColor,
  selected=false,
}: props) => {
  return (
    <div className={`main-list-item-container ${selected && 'selected'}`}>
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
      <div className="main-list-right-item-container">
        <MainListRightItem
          circleColor={rightItemCircleColor}
          iconColor={rightItemIconColor}
          iconStyle={rightItemIconStyle}
          iconName={rightItemIconName}
          textValue={rightItemTextValue}
          textSize={rightItemTextSize}
          circleSize={rightItemCircleSize}
          textColor={rightItemTextColor}
          iconSize={rightItemIconSize}
        />
      </div>
    </div>
  );
};

export { MainListItem };
