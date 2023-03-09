import { Filter, Dropdown } from "../../in";
import { FilterItem } from "../../in";
import "./ComponentsListFilter.css";

export interface Option {
  key: string;
  value: string;
}
interface props {
  options: Option[];
  chosenOption: Option;
  onChange: (option: Option) => any;
  filterItem: FilterItem[];
}

const ComponentsListFilter = ({ options, chosenOption, onChange, filterItem }: props) => {
  return (
    <div className="inner-list-filter-container">
      <Dropdown chosenOption={chosenOption} options={options} onChange={onChange} />
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
