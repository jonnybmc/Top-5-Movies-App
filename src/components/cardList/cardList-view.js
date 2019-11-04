import React from 'react';
import CardItem from '../cardItem';

const CardList = ({movies}) => {
    const movieList = movies.map((movie,i) => (
       <CardItem image={movie.imageUrl} key={i}/> 
    ))
    return (
        <div>
           {movieList}
        </div>
    )
        
}

export default CardList;