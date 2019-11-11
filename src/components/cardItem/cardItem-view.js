import React from 'react';
import {Fragment} from 'react';



const CardItem = ({image,releaseDate,rank}) => {
    return  (
        <Fragment>   
            <img className="card" style={{width:"100%"}} src={image}/>
            <div>
            <span>{releaseDate }</span> <span>{rank}</span>
            </div>  
        </Fragment>
    )
}

export default CardItem;