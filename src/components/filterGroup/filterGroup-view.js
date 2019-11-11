import React from 'react';
import FilterItem from '../filterItem';



const FilterGroup = ({filters, sortMovies, currentSortOrder}) => {
    console.log("the current sort order is: "  + currentSortOrder);
    return (
        <div>
            <h1>This is the Filter group</h1>
            {filters.map(filter => (
                <FilterItem isActive={currentSortOrder} label={filter.label}onClick={() => sortMovies(filter.valueToOrderBy)}/>
            ))}
        </div>
    )
}

export default FilterGroup;