import React, { useEffect } from "react";
import { Icon } from "../../in";

import "./Dropdown.css";

interface Option {
  key: string;
  value: string;
}
interface props {
  options: Option[];
  chosenOption: Option;
  onChange: (option: Option) => any;
}

const Dropdown = ({ options, chosenOption, onChange }: props) => {
  // onChange
  const onChangeHandler = (option: Option) => {
    if (option.key === chosenOption.key) return;
    onChange(option);
  };

  useEffect(() => {}, []);

  return (
    <div className="dropdown-container">
      <span className="dropdown-title">sort by:</span>
      <div className="dropdown" tabIndex={1}>
        {/* dorpdown body */}
        <div className="db2" tabIndex={1}></div>
        {chosenOption.value}
        <a className="dropbtn">
          <Icon iconName="angle-down" />
        </a>

        {/* dorpdown content */}
        <div className="dropdown-content">
          {options.map((option) => {
            return (
              <div
                tabIndex={1}
                key={option.key}
                onClick={() => {
                  return onChangeHandler(option);
                }}
              >
                <a href="#">{option.value}</a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export { Dropdown };
