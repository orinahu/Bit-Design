import { Filter, Dropdown } from "../../in";
import "./InnerListFilter.css";

interface Option {
  key: string;
  value: string;
}
interface props {
  options: Option[];
  onChange: (option: Option) => any;
}

const InnerListFilter = ({ options, onChange }: props) => {
  return (
    <div className="inner-list-filter-container">
      <Dropdown options={options} onChange={onChange} />
      <div className="inner-list-filter">
        <Filter />
      </div>
    </div>
  );
};

export { InnerListFilter };
