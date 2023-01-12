import "./MainListUpperRightItem.css";
import { Icon, IconSize, IconForm } from "../../in";
import { Text, Size } from "../../in";

interface props {
  iconName?: string;
  iconColor?: string;
  iconSize?: IconSize;
  iconStyle?: IconForm;
  textValue: string;
  textSize?: Size;
}

const MainListUpperRightItem = ({
  iconColor = "#52517A",
  iconSize = "lg",
  iconStyle,
  iconName = "id-card",
  textValue,
  textSize = "small",
}: props) => {
  return (
    <div className="main-list-upper-left-container">
      <Icon
        iconName={iconName}
        iconForm={iconStyle}
        iconSize={iconSize}
        iconColor={iconColor}
      />
      <Text text={textValue} size={textSize} />
    </div>
  );
};

export { MainListUpperRightItem };
