import './InnerList.css'

import {
    Icon,
    IconSize,
    IconForm,
    ListTitle,
    InnerListFilter,
    InnerListItems,
    Text,
    Size,
    ListItem
} from "../../in";

interface props {
    titleName: string;
    titleNumber: number;
    titleIconName?: string;
    titleIconColor?: string;
    titleIconSize?: IconSize;
    titleIconForm?: IconForm;
    titleTextSize?: Size;
    titleClassName?: string;
    titleStyle?: React.CSSProperties;

    filterOptions: string[];
    filterValue: string;
    filterSetDropdownValue: (value: string) => void;

    InnerItems: any[];

    renderItemsFunction: any | JSX.Element[] | JSX.Element;

}

const InnerList = ({
    titleName,
    titleNumber,
    titleIconName,
    titleIconColor,
    titleIconForm,
    titleIconSize,
    titleTextSize,
    titleClassName,
    titleStyle,

    filterOptions,
    filterValue,
    filterSetDropdownValue,

    InnerItems,
    renderItemsFunction
}: props) => {
    return (
        <div className={`bit-inner-list-container ${titleClassName}`} style={titleStyle}>
            {/* title */}
            <div className='bit-inner-list-title-container'>
                <ListTitle
                    number={titleNumber}
                    name={titleName}
                    iconName={titleIconName}
                    iconColor={titleIconColor}
                    iconForm={titleIconForm}
                    iconSize={titleIconSize}
                    textSize={titleTextSize}
                />
            </div>
            {/* divider */}
            <div className='bit-inner-list-divider'></div>
            {/* sort */}
            <div className='bit-inner-list-sort-container'>
                <InnerListFilter
                    options={filterOptions}
                    value={filterValue}
                    setDropdownValue={filterSetDropdownValue} />
            </div>
            {/* items */}
            <div className='bit-inner-item-container'>
                <InnerListItems items={InnerItems}>
                    {renderItemsFunction}
                </InnerListItems>
            </div>
        </div>
    )
}

export { InnerList }