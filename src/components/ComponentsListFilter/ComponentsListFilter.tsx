import { Filter, Dropdown } from "../../in";
import { FilterItem, ItemStatus } from "../../in";
import "./ComponentsListFilter.css";

export interface Option {
  key: string;
  value: string;
}
interface props {
  options: Option[];
  chosenOption: Option;
  onChangeDropdown: (option: Option) => any;
  onChangeFilter: (option: ItemStatus) => any;
  onFiltered: (filterItem: FilterItem[]) => any;
  filterItem: FilterItem[];
}

const ComponentsListFilter = ({
  options,
  chosenOption,
  onChangeDropdown,
  filterItem,
  onFiltered,
  onChangeFilter,
}: props) => {
  return (
    <div className="inner-list-filter-container">
      <Dropdown
        chosenOption={chosenOption}
        options={options}
        onChange={onChangeDropdown}
      />
      <div className="inner-list-filter">
        <Filter
          filterItem={filterItem}
          onChange={onChangeFilter}
          onFiltered={onFiltered}
        />
      </div>
    </div>
  );
};

export { ComponentsListFilter };
