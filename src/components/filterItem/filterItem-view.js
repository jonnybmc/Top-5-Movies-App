import React from 'react';

const format = (string) => {
    let [first,second] = string.split(" ");
    let one = first.toLowerCase();
    let res = typeof second !== 'undefined' ? one.concat(second) : one;
    return res;
}

const FilterItem = ({label,onClick,isActive}) => {
    let formattedLabel = format(label);
    let style = {
        backgroundColor: formattedLabel === isActive ? "rgba(0,0,0,1)" : "rgba(0,0,0,0.2)",
        color: formattedLabel === isActive ? "white" : "gray"
    };
    return (
        <button style={style} onClick={onClick}>{label}</button>
    ) 
}

export default FilterItem;