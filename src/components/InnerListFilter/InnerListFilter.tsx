import { Filter, Dropdown } from "../../in";
import { FilterItem } from "../../in";
import "./InnerListFilter.css";

interface Option {
  key: string;
  value: string;
}
interface props {
  options: Option[];
  onChange: (option: Option) => any;
  filterItem: FilterItem[];
}

const InnerListFilter = ({ options, onChange, filterItem }: props) => {
  return (
    <div className="inner-list-filter-container">
      <Dropdown options={options} onChange={onChange} />
      <div className="inner-list-filter">
        <Filter filterItem={filterItem} />
      </div>
    </div>
  );
};

export { InnerListFilter };
