import "./SystemListItem.css";
import { SystemItemText, TrafficLights } from "../../in";
import { Text, Size, IconSize, IconForm, componenetsStatus } from "../../in";

interface statusComponents {
  ComponentStatus: componenetsStatus;
  counter: number;
}

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

  SDerivedStatusCounter: statusComponents[];
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

  SDerivedStatusCounter,
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
          SDerivedStatusCounter={SDerivedStatusCounter}
        />
      </div>
    </div>
  );
};

export { SystemListItem };