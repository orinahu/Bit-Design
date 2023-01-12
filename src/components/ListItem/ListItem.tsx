import {
  DateTime,
  Id,
  Status,
} from "../../in";
import { Size, IconSize, IconForm } from "../../in";
import "./ListItem.css";

interface props {
  DateTimeIconName?: string;
  DateTimeIconColor?: string;
  DateTimeIconSize?: IconSize;
  DateTimeIconForm?: IconForm;
  DateTimeTextSize?: Size;
  date: Date;
  IdIconName?: string;
  IdIconColor?: string;
  IdIconSize?: IconSize;
  IdIconStyle?: IconForm;
  IdText: string;
  IdSize?: Size;
  statusCircleColor: string;
  statusIconColor?: string;
  statusIconSize?: IconSize;
  statusIconStyle?: IconForm;
  statusIconName?: string;
  statusText: string;
  statusSize?: Size;
  statusCircleSize?: Size;
  selected?: boolean;
  className?: string;
}

const ListItem = ({
  DateTimeIconName,
  DateTimeIconColor,
  DateTimeIconSize,
  DateTimeIconForm,
  DateTimeTextSize,
  date,
  IdIconName,
  IdIconColor,
  IdIconSize,
  IdIconStyle,
  IdText,
  IdSize,
  statusCircleColor,
  statusIconColor,
  statusIconSize,
  statusIconStyle,
  statusIconName,
  statusText,
  statusSize,
  selected = false,
  className,
}: props) => {
  return (
    <div className={`bit-list-item ${className} ${selected && "selected"}`}>
      <div className="bit-list-item-status-container">
        <Status
          circleColor={statusCircleColor}
          iconColor={statusIconColor}
          iconForm={statusIconStyle}
          iconName={statusIconName}
          text={statusText}
          size={statusSize}
          iconSize={statusIconSize}
        />
      </div>
      <div className="bit-list-item-right-container">
        <div className="bit-list-item-id-container">
          <Id
            iconColor={IdIconColor}
            iconSize={IdIconSize}
            iconForm={IdIconStyle}
            iconName={IdIconName}
            text={IdText}
            size={IdSize}
          />
        </div>
        <div className="bit-list-item-right-divider"></div>
        <div className="bit-list-item-DateTime-container">
        <DateTime
          iconColor={DateTimeIconColor}
          iconSize={DateTimeIconSize}
          iconForm={DateTimeIconForm}
          iconName={DateTimeIconName}
          date={date}
          text={DateTimeTextSize}
        />
        </div>
      </div>
    </div>
  );
};

export { ListItem };
