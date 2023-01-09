import { useState, useEffect } from "react";
import { Icon } from "../../in";

import "./Dropdown.css";

interface props {
  options: string[];
}

const Dropdown = ({ options }: props) => {
  const [choseOption, setChoseOption] = useState(options[0]);

  useEffect(() => {}, []);

  return (
    <div className="dropdown" tabIndex={1}>
      <div className="db2" tabIndex={1}></div>
      {choseOption}
      <a className="dropbtn">
        <Icon iconName="angle-down" />
      </a>

      <div className="dropdown-content">
        {options.map((option) => {
          return (
            <a onClick={() => setChoseOption(option)} href="#">
              {option}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export { Dropdown };
