import { Filter, Dropdown } from '../../in'
import './InnerListFilter.css'

interface props {
    options: string[];
    value: string;
    setDropdownValue: (value: string) => void;
}

const InnerListFilter = ({ options, value, setDropdownValue }: props) => {
    return (
        <div className="inner-list-filter-container">
            <Dropdown
                options={options}
                value={value}
                setDropdownValue={setDropdownValue}
            />
            <div className='inner-list-filter'>
                <Filter />
            </div>
        </div>
    )
}

export { InnerListFilter }