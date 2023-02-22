import { useState, useEffect } from "react";
import { Icon } from "../../in";

import "./Dropdown.css";

interface Option {
  key: string;
  value: string;
}
interface props {
  options: Option[];
  onChange: (option: Option) => any;
}

const Dropdown = ({ options, onChange }: props) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  // onChange
  const onChangeHandler = (option: Option) => {
    if (option.key === selectedOption.key) return;
    onChange(option);
  };

  useEffect(() => {}, []);

  return (
    <div className="dropdown-container">
      <text className="dropdown-title">sort by:</text>
      <div className="dropdown" tabIndex={1}>
        {/* dorpdown body */}
        <div className="db2" tabIndex={1}></div>
        {selectedOption.value}
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
                  setSelectedOption(option);
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
