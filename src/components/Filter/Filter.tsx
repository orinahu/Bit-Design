import React from "react";
import { Icon, IconSize, IconForm } from "../../in";
import { Popover } from "@headlessui/react";
import "./Filter.css";
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
  onChange: (option: ItemStatus) => any;
  onFiltered: (filterItem: FilterItem[]) => any;
  onReset: () => any;
  onClose: () => any;
}

const Filter = ({
  buttonIconForm,
  buttonIconSize,
  className,
  style,
  filterItem,
  onChange,
  onFiltered,
  onReset,
  onClose,
}: props) => {
  // change checkbox handler
  const checkboxChangeHandler = (subjectIndex: number, itemIndex: number) => {
    const mutableArray = JSON.parse(JSON.stringify(filterItem));
    mutableArray[subjectIndex].items[itemIndex].checked =
      !mutableArray[subjectIndex].items[itemIndex].checked;
    onChange(mutableArray);
    return;
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
                onClick={() => {
                  onClose();
                  close();
                }}
              >
                <Icon iconName="x" />
              </div>
            </div>

            {/* content */}
            <div className="bit-popover-body">
              {filterItem.map((subject: any, subjectIndex: number) => {
                return (
                  <>
                    <span>{subject.title}</span>
                    <div className="check-boxs-container">
                      {subject.items.map((item: any, itemIndex: number) => {
                        return (
                          <div key={item.name} className="checkbox-container">
                            <input
                              type="checkbox"
                              onChange={() =>
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
                onClick={() => {
                  onFiltered([...filterItem]);
                  onClose();
                  close();
                }}
                id="filter-button"
                className="bit-popover-buttom"
              >
                Filter
              </button>
              <button
                onClick={onReset}
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
