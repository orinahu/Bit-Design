import "./RootItemText.css";
import { Icon, IconSize, IconForm } from "../../in";
import { Text, Size } from "../../in";

interface props {
  name: string;
  number: number;
  iconName?: string;
  iconColor?: string;
  iconSize?: IconSize;
  iconForm?: IconForm;
  textSize?: Size;
  className?: string;
  style?: React.CSSProperties;
}

const RootItemText = ({
  iconColor,
  name,
  number,
  iconSize = "lg",
  iconForm,
  iconName = "image",
  textSize = "small",
  className,
  style,
}: props) => {
  return (
    <div className={`bit-list-item-root-name ${className}`} style={style}>
      <Icon
        iconName={iconName}
        iconForm={iconForm}
        iconSize={iconSize}
        iconColor={iconColor}
      />
      <div className="bit-list-item-root-name-text-container">
        <Text
          size={textSize}
          text={`${
            name[0].toUpperCase() + name.slice(1)
          } (${number.toString()} components)`}
        />
      </div>
    </div>
  );
};

export { RootItemText };
