import React from 'react';
import FilterItem from '../filterItem';

const FilterGroup = ({filters}) => {
    return (
        <div>
            <h1>This is the Filter group</h1>
            {filters.map(filter => (
                <FilterItem label={filter.label}/>
            ))}
        </div>
    )
}

export default FilterGroup;