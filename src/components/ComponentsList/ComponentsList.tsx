import "./ComponentsList.css";

import {
  Icon,
  IconSize,
  IconForm,
  ListTitle,
  InnerListFilter,
  ListItems,
  Text,
  Size,
  ListItem,
} from "../../in";

import { FilterItem } from "../../in";

interface dropdownOptions {
  key: string;
  value: string;
}

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

  filterOptions: dropdownOptions[];
  onChange: (option: dropdownOptions) => any;

  filterItem: FilterItem[];

  InnerItems: any[];

  renderItemsFunction: any | JSX.Element[] | JSX.Element;
}

const ComponentsList = ({
  titleName,
  titleNumber,
  titleIconName,
  titleIconColor,
  titleIconForm,
  titleIconSize,
  titleTextSize,
  titleClassName,
  titleStyle,
  filterItem,
  filterOptions,
  onChange,

  InnerItems,
  renderItemsFunction,
}: props) => {
  return (
    <div
      className={`bit-components-list-container ${titleClassName}`}
      style={titleStyle}
    >
      {/* title */}
      <div className="bit-components-list-title-container">
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
      <div className="bit-components-list-divider"></div>
      {/* sort */}
      <div className="bit-components-list-sort-container">
        <InnerListFilter
          options={filterOptions}
          onChange={(option) => console.log(option.value, " from onChange")}
          filterItem={filterItem}
        />
      </div>
      {/* items */}
      <div className="bit-components-item-container">
        <ListItems items={InnerItems}>{renderItemsFunction}</ListItems>
      </div>
    </div>
  );
};

export { ComponentsList };
