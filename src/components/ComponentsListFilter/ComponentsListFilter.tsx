import { Filter, Dropdown } from "../../in";
import { FilterItem } from "../../in";
import "./ComponentsListFilter.css";

interface Option {
  key: string;
  value: string;
}
interface props {
  options: Option[];
  onChange: (option: Option) => any;
  filterItem: FilterItem[];
}

const ComponentsListFilter = ({ options, onChange, filterItem }: props) => {
  return (
    <div className="inner-list-filter-container">
      <Dropdown options={options} onChange={onChange} />
      <div className="inner-list-filter">
        <Filter
          filterItem={filterItem}
          onChange={(ChangeData) => console.log("on change data ", ChangeData)}
          onFiltered={(filterData) =>
            console.log("on filter data ", filterData)
          }
        />
      </div>
    </div>
  );
};

export { ComponentsListFilter };
