import React from 'react';
import FilterItem from '../filterItem';



const FilterGroup = ({filters, sortMovies}) => {
    return (
        <div>
            <h1>This is the Filter group</h1>
            {filters.map(filter => (
                <FilterItem label={filter.label} onClick={() => sortMovies(filter.valueToOrderBy)}/>
            ))}
        </div>
    )
}

export default FilterGroup;