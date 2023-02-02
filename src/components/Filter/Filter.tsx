import React, { useState } from 'react';
import { Icon, IconSize, IconForm } from "../../in";
import { Popover } from '@headlessui/react'
import './Filter.css'

// todo: check one atribute can be forced (title) and genric all another propeties 
// take title from filters
const filtersO = { status: { title: 'Component Status', damaged: false, warning: true, undamaged: false }, time: { title: 'Advent Status:', '3': false, '6': true, '24': false, 'week': false } }
const titles = { status: 'Component Status:', time: 'Advent Status:' }

interface props {
    buttonIconForm?: IconForm;
    buttonIconSize?: IconSize;
    className?: string;
    style?: React.CSSProperties
}


const Filter = ({ buttonIconForm,
    buttonIconSize,
    className,
    style }: props) => {
    const [filters, setFilters] = useState<any>(filtersO)

    // render check box item
    const renderCheckbox = (subject: string) => {
        return Object.keys(filters[subject as keyof typeof filters]).map((item) => {
            const obj = filters[subject as keyof typeof filters]
            const checked = obj[item as keyof typeof obj];
            return (<div key={item} className='checkbox-container'>
                <input type="checkbox" onClick={(e) => checkboxChangeHandler(subject, item, checked)} checked={checked}></input>
                <span>{item} {!isNaN(parseFloat(item)) ? ' hours' : ''}</span>
            </div>)
        })
    }

    // change checkbox handler
    const checkboxChangeHandler = (subject: string, itemToggleName: string, oldValue: boolean) => {
        setFilters({ ...filters, [subject]: { ...filters[subject as keyof typeof filters], [itemToggleName]: !oldValue } })
    }

    // reset all value to false - for reset button
    const resetHandler = () => {
        let resetFilters = {};
        const subjects = Object.keys(filters)
        for (let subject of subjects) {
            let resetObject = {};
            const filtersInSubject = Object.keys(filters[subject as keyof typeof filters])
            for (let filter of filtersInSubject) {
                resetObject = { ...resetObject, [filter]: false }
            }
            resetFilters = { ...resetFilters, [subject]: resetObject }
        }
        setFilters({ ...resetFilters })
    }




    return (
        <Popover className={`bit-popover-container ${className}`} style={style} >
            <Popover.Button className='bit-popover-icon'><Icon iconName='filter' iconForm={buttonIconForm} iconSize={buttonIconSize} /></Popover.Button>
            <Popover.Panel className="bit-popover-card-container">
                {({ close }) => (
                    <div className='bit-popover-card-content'>

                        {/* title */}
                        <div className='bit-popover-title'>
                            <Icon iconName='filter' />
                            <span>Filters</span>
                            <div className='bit-popover-title-close-button' onClick={() => close()}>
                                <Icon iconName='x' />
                            </div>
                        </div>

                        {/* content */}
                        <div className="bit-popover-body">
                            {Object.keys(filters).map((subject) => {
                                return (<>
                                    <span>{titles[subject as keyof typeof titles]}</span>
                                    <div className='check-boxs-container'>
                                        {renderCheckbox(subject)}
                                    </div></>)
                            })}
                        </div>

                        {/* bottons */}
                        <div className='bit-popover-bottom'>
                            <button onClick={() => close()} id='filter-button' className='bit-popover-buttom'>Filter</button>
                            <button onClick={() => resetHandler()} id='reset-button' className='bit-popover-buttom'>Reset</button>
                        </div>
                    </div>
                )}
            </Popover.Panel>
        </Popover>
    )
}

export { Filter }