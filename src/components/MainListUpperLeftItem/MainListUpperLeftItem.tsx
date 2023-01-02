import "./MainListUpperLeftItem.css";
import { Icon, IconSize, IconStyle } from "../../in";
import { Text, TextSize } from "../../in";

interface props {
  iconName: string;
  iconColor?: string;
  iconSize?: IconSize;
  iconStyle?: IconStyle;
  textValue: string;
  textSize?: TextSize;
}

const MainListUpperLeftItem = ({
  iconColor = '#52517A',
  iconSize = 'lg',
  iconStyle,
  iconName,
  textValue,
  textSize='small',
}: props) => {
  return (
    <div className="main-list-bottom-left-container">
      <Text textValue={textValue} textSize={textSize} />
      <Icon
        iconName={iconName}
        iconStyle={iconStyle}
        iconSize={iconSize}
        iconColor={iconColor}
      />
    </div>
  );
};

export { MainListUpperLeftItem };
