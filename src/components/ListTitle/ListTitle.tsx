import React from "react";
import './ListTitle.css'
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

const ListTitle = ({
    iconColor,
    name,
    number,
    iconSize = "xl",
    iconForm,
    iconName = "image",
    textSize = "large",
    className,
    style
}: props) => {
    return (

        <div className={`bit-list-title-container ${className}`} style={style}>
            <Icon
                iconName={iconName}
                iconForm={iconForm}
                iconSize={iconSize}
                iconColor={iconColor}
            />
            <Text size={textSize} text={`${name[0].toUpperCase() + name.slice(1)} (${number.toString()})`} />
        </div>

    )
}

export { ListTitle }