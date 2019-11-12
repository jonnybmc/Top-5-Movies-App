import React from 'react';
import FilterItem from '../filterItem';
import styles from './filterGroup.module.scss';

import {Link} from 'react-router-dom';



const FilterGroup = ({filters, sortMovies, currentSortOrder}) => {
    console.log("the current sort order is: "  + currentSortOrder);
    return (
        <section className={styles.filterContainer}>
            <h4>Sort By </h4>
            {filters.map(filter => (
                <Link to="/">
                    <FilterItem isActive={currentSortOrder} label={filter.label}onClick={() => sortMovies(filter.valueToOrderBy)}/>
                </Link>
            ))}
        </section>
    )
}   

export default FilterGroup;