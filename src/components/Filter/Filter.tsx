import React, { useState } from "react";
import { Icon, IconSize, IconForm } from "../../in";
import { Popover } from "@headlessui/react";
import "./Filter.css";

const filtersO = [
  {
    title: "Component Status",
    items: [
      { name: "damaged", checked: false },
      { name: "warning", checked: true },
      { name: "undamaged", checked: false },
    ],
  },
  {
    title: "Advent Status:",
    items: [
      { name: "3", checked: false },
      { name: "6", checked: true },
      { name: "24", checked: false },
      { name: "week", checked: false },
    ],
  },
];

export interface ItemStatus {
  name: string;
  checked: boolean;
}
export interface FilterItem {
  title: string;
  items: ItemStatus[];
}
interface props {
  buttonIconForm?: IconForm;
  buttonIconSize?: IconSize;
  className?: string;
  style?: React.CSSProperties;
  filterItem: FilterItem[];
}

const Filter = ({
  buttonIconForm,
  buttonIconSize,
  className,
  style,
  filterItem,
}: props) => {
  const [filters, setFilters] = useState<any>(filterItem);

  // change checkbox handler
  const checkboxChangeHandler = (subjectIndex: number, itemIndex: number) => {
    const mutableArray = [...filters];
    mutableArray[subjectIndex].items[itemIndex].checked =
      !mutableArray[subjectIndex].items[itemIndex].checked;
    setFilters([...mutableArray]);
  };

  // reset all value to false - for reset button
  const resetHandler = () => {
    const mutableArray = filters.reduce((acc: any, current: any) => {
      const items = current.items.map((item: any) => {
        return { ...item, checked: false };
      });
      acc.push({ ...current, items });
      return acc;
    }, []);

    setFilters([...mutableArray]);
  };

  return (
    <Popover className={`bit-popover-container ${className}`} style={style}>
      <Popover.Button className="bit-popover-icon">
        <Icon iconName="filter" iconForm={buttonIconForm} iconSize="xl" />
      </Popover.Button>
      <Popover.Panel className="bit-popover-card-container">
        {({ close }) => (
          <div className="bit-popover-card-content">
            {/* title */}
            <div className="bit-popover-title">
              <Icon iconName="filter" />
              <span>Filters</span>
              <div
                className="bit-popover-title-close-button"
                onClick={() => close()}
              >
                <Icon iconName="x" />
              </div>
            </div>

            {/* content */}
            <div className="bit-popover-body">
              {filters.map((subject: any, subjectIndex: number) => {
                return (
                  <>
                    <span>{subject.title}</span>
                    <div className="check-boxs-container">
                      {subject.items.map((item: any, itemIndex: number) => {
                        return (
                          <div key={item.name} className="checkbox-container">
                            <input
                              type="checkbox"
                              onClick={() =>
                                checkboxChangeHandler(subjectIndex, itemIndex)
                              }
                              checked={item.checked}
                            ></input>
                            <span>
                              {item.name}{" "}
                              {!isNaN(parseFloat(item.name)) ? " hours" : ""}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </>
                );
              })}
            </div>

            {/* bottons */}
            <div className="bit-popover-bottom">
              <button
                onClick={() => close()}
                id="filter-button"
                className="bit-popover-buttom"
              >
                Filter
              </button>
              <button
                onClick={() => resetHandler()}
                id="reset-button"
                className="bit-popover-buttom"
              >
                Reset
              </button>
            </div>
          </div>
        )}
      </Popover.Panel>
    </Popover>
  );
};

export { Filter };
