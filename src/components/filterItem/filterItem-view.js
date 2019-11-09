import React from 'react';

const FilterItem = ({label,onClick}) => {
    return (
        <button onClick={onClick}>{label}</button>
    ) 
}

export default FilterItem;