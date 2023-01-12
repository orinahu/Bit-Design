import React from "react";
import "./MainListBottom.css";
interface ListItem {
  items: Array<any>,
  children: any | JSX.Element[] | JSX.Element;
}

const MainListBottom = ({ items, children }: ListItem) => {
  return <div className="main-list-bottom">
    {items.map((item, index) => {
      return <div key={index}>
        {children(item)}
      </div>;
    })}
  </div>;
};

export { MainListBottom };
