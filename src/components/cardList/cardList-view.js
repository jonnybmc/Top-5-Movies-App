import React from 'react';
import CardItem from '../cardItem';

const CardList = ({movies,sortValue}) => {
    let sortedMovieList = movies.sort((a,b) => (a[sortValue] > b[sortValue]) ? 1 : -1);
     sortedMovieList = sortedMovieList.map((movie,i) => (
       <CardItem image={movie.imageUrl} key={i}/> 
    ));
    return (
        <div>
           {sortedMovieList}
        </div>
    )
        
}

export default CardList;