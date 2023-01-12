import "./Id.css";
import { Icon, IconSize, IconForm } from "../../in";
import { Text, Size } from "../../in";

interface props {
  iconName?: string;
  iconColor?: string;
  iconSize?: IconSize;
  iconForm?: IconForm;
  text: string;
  size?: Size;
  className?: string;
}

const Id = ({
  iconColor = "#52517A",
  iconSize = "lg",
  iconForm,
  iconName = "id-card",
  text,
  size = "small",
  className,
}: props) => {
  return (
    <div className={`main-list-upper-left-container ${className}`}>
      <Icon
        iconName={iconName}
        iconForm={iconForm}
        iconSize={iconSize}
        iconColor={iconColor}
      />
      <Text text={text} size={size} />
    </div>
  );
};

export { Id };
