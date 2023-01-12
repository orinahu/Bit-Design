import {
  MainListBottomRightItem,
  MainListUpperRightItem,
  MainListLeftItem,
} from "../../in";
import { Size, IconSize, IconForm } from "../../in";
import "./MainListItem.css";

interface props {
  bottomRightIconName?: string;
  bottomRightIconColor: string;
  bottomRightIconSize?: IconSize;
  bottomRightIconStyle?: IconForm;
  bottomRightTextSize?: Size;
  bottomRightTextColor?: string;
  bottomRightMainListDate: Date;
  upperRightIconName?: string;
  upperRightIconColor?: string;
  upperRightIconSize?: IconSize;
  upperRightIconStyle?: IconForm;
  upperRightTextValue: string;
  upperRightTextSize?: Size;
  upperRightTextColor?: string;
  leftItemCircleColor: string;
  leftItemIconColor?: string;
  leftItemIconSize?: IconSize;
  leftItemIconStyle?: IconForm;
  leftItemIconName?: string;
  leftItemTextValue: string;
  leftItemTextSize?: Size;
  leftItemCircleSize?: Size;
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
        <div className="main-list-upper-right-item">
          <MainListUpperRightItem
            iconColor={upperRightIconColor}
            iconSize={upperRightIconSize}
            iconStyle={upperRightIconStyle}
            iconName={upperRightIconName}
            textValue={upperRightTextValue}
            textSize={upperRightTextSize}
            textColor={upperRightTextColor}
          />
        </div>
        <div className="main-list-right-item-divider"></div>
        <div className="main-list-bottom-right-item">
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
    </div>
  );
};

export { MainListItem };
