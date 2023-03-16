import React from "react";
import "./ListMenu.css";

interface props {
  renderItems: any | JSX.Element[] | JSX.Element;
  renderTitle: any | JSX.Element[] | JSX.Element;
  renderFilters?: any | JSX.Element[] | JSX.Element;
  className?: string;
  style?: React.CSSProperties;
}

const ListMenu = ({
  renderItems,
  renderTitle,
  renderFilters,
  className,
  style,
}: props) => {
  return (
    <div className={`bit-components-list-container ${className}`} style={style}>
      {/* title */}
      <div className="bit-components-list-title-container">{renderTitle()}</div>
      {/* divider */}
      <div className="bit-components-list-divider"></div>
      {/* sort */}
      <div className="bit-components-list-sort-container">
        {renderFilters && renderFilters()}
      </div>
      {/* items */}
      <div className="bit-components-item-container">{renderItems()}</div>
    </div>
  );
};

export { ListMenu };
