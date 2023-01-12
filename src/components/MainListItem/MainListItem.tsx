import {
  MainListBottomRightItem,
  MainListUpperRightItem,
  Status,
} from "../../in";
import { Size, IconSize, IconForm } from "../../in";
import "./MainListItem.css";

interface props {
  bottomRightIconName?: string;
  bottomRightIconColor: string;
  bottomRightIconSize?: IconSize;
  bottomRightIconStyle?: IconForm;
  bottomRightTextSize?: Size;
  bottomRightMainListDate: Date;
  upperRightIconName?: string;
  upperRightIconColor?: string;
  upperRightIconSize?: IconSize;
  upperRightIconStyle?: IconForm;
  upperRightTextValue: string;
  upperRightTextSize?: Size;
  leftItemCircleColor: string;
  leftItemIconColor?: string;
  leftItemIconSize?: IconSize;
  leftItemIconStyle?: IconForm;
  leftItemIconName?: string;
  leftItemTextValue: string;
  leftItemTextSize?: Size;
  leftItemCircleSize?: Size;
  selected?: boolean;
}

const MainListItem = ({
  bottomRightIconName,
  bottomRightIconColor,
  bottomRightIconSize,
  bottomRightIconStyle,
  bottomRightTextSize,
  bottomRightMainListDate,
  upperRightIconName,
  upperRightIconColor,
  upperRightIconSize,
  upperRightIconStyle,
  upperRightTextValue,
  upperRightTextSize,
  leftItemCircleColor,
  leftItemIconColor,
  leftItemIconSize,
  leftItemIconStyle,
  leftItemIconName,
  leftItemTextValue,
  leftItemTextSize,
  selected = false,
}: props) => {
  return (
    <div className={`main-list-item-container ${selected && "selected"}`}>
      <div className="main-list-left-item-container">
        <Status
          circleColor={leftItemCircleColor}
          iconColor={leftItemIconColor}
          iconForm={leftItemIconStyle}
          iconName={leftItemIconName}
          text={leftItemTextValue}
          size={leftItemTextSize}
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
        />
        </div>
      </div>
    </div>
  );
};

export { MainListItem };
