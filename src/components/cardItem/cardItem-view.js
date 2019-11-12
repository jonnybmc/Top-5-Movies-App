import React from 'react';
import {Fragment} from 'react';

import styles from './cardItem.module.scss';

const CardItem = ({image}) => {
    return  (
        <Fragment>   
            <img className={styles.card} src={image} alt="movie poster"/>
        </Fragment>
    )
}

export default CardItem;