interface ListItem {
  items: Array<any>,
  children: any | JSX.Element[] | JSX.Element;
}

const ListItems = ({ items, children }: ListItem) => {
  return <div className="bit-item-list-bottom">
    {items.map((item, index) => {
      return <div key={index}>
        {children(item)}
      </div>;
    })}
  </div>;
};

export { ListItems };
