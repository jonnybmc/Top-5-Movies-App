import React from 'react';
import FilterItem from '../filterItem';

import {Link} from 'react-router-dom'



const FilterGroup = ({filters, sortMovies, currentSortOrder}) => {
    console.log("the current sort order is: "  + currentSortOrder);
    return (
        <div>
            <h1>This is the Filter group</h1>
            {filters.map(filter => (
                <Link to="/">
                    <FilterItem isActive={currentSortOrder} label={filter.label}onClick={() => sortMovies(filter.valueToOrderBy)}/>
                </Link>
            ))}
        </div>
    )
}

export default FilterGroup;