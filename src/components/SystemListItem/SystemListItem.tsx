import "./SystemListItem.css";
import { SystemItemText, TrafficLights } from "../../in";
import { Size, IconSize, IconForm, StatusComponents } from "../../in";

interface props {
  textName: string;
  textNumber: number;
  textIconName?: string;
  textIconColor?: string;
  textIconSize?: IconSize;
  textIconForm?: IconForm;
  textTextSize?: Size;
  textClassName?: string;
  textStyle?: React.CSSProperties;

  statusComponents: StatusComponents[];
  TraficLightsTextSize?: Size;
  TraficLightsClassName?: string;

  selected?: boolean;

  className?: string;
}

const SystemListItem = ({
  textName,
  textNumber,
  textIconName,
  textIconColor,
  textIconSize,
  textIconForm,
  textTextSize,
  textClassName,
  textStyle,

  statusComponents,
  TraficLightsTextSize,
  TraficLightsClassName,

  selected = false,
  className,
}: props) => {
  return (
    <div
      className={`bit-root-list-item-container ${className} ${
        selected && "selected"
      }`}
    >
      <SystemItemText
        name={textName}
        number={textNumber}
        iconName={textIconName}
        iconColor={textIconColor}
        iconSize={textIconSize}
        iconForm={textIconForm}
        textSize={textTextSize}
        className={textClassName}
        style={textStyle}
      />
      <div className="bit-root-list-item-divider"></div>
      <div>
        <TrafficLights
          className={TraficLightsClassName}
          size={TraficLightsTextSize}
          statusComponents={statusComponents}
        />
      </div>
    </div>
  );
};

export { SystemListItem };
