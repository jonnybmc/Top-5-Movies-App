import React from 'react';
import styles from './filterItem.module.scss';

const format = (string) => {
    let [first,second] = string.split(" ");
    let one = first.toLowerCase();
    let res = typeof second !== 'undefined' ? one.concat(second) : one;
    return res;
}

const FilterItem = ({label,onClick,isActive}) => {
    let formattedLabel = format(label);
    let style = {
        backgroundColor: formattedLabel ===  isActive ? "rgb(218, 218, 218)" : "rgba(117, 117, 117, 0.5)",
        color: formattedLabel === isActive ? "black" : "darkgrey"
    };
    return (
        <button className={styles.filterItem} style={style} onClick={onClick}>{label}</button>
    ) 
}

export default FilterItem;