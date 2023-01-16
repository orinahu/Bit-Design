import { useState, useEffect } from "react";
import { Icon } from "../../in";

import "./Dropdown.css";
interface props {
  options: string[];
  value: string;
  setDropdownValue: (value: string) => void;
}

const Dropdown = ({ options, value, setDropdownValue }: props) => {
  useEffect(() => {}, []);

  return (
    <div className="dropdown" tabIndex={1}>
      <div className="db2" tabIndex={1}></div>
      {value}
      <a href="javascript:void(0)" className="dropbtn">
        <Icon iconName="angle-down" />
      </a>

      <div className="dropdown-content">
        {options.map((option) => {
          return (
            <div
              tabIndex={1}
              key={option}
              onClick={() => {
                console.log(option) 
                return setDropdownValue(option)}}
            >
              <a href="#">{option}</a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { Dropdown };
