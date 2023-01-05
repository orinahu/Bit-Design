import React from "react";
import "./MainListBottom.css";
interface MainListItem {
  children: JSX.Element[] | JSX.Element;
}

const MainListBottom = ({ children }: MainListItem) => {
  return <div className="main-list-bottom">{children}</div>;
};

export { MainListBottom };
