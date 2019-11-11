import React from 'react';
import CardItem from '../cardItem';
import {Link} from 'react-router-dom';


const CardList = ({movies,sortValue, location}) => {
    let sortedMovieList = movies.sort((a,b) => (a[sortValue] > b[sortValue]) ? 1 : -1);
     sortedMovieList = sortedMovieList.map((movie,i) => (
         <Link to={`/movies/${movie.rank}`} style={{width:"10%",marginRight:"2%"}}>
            <CardItem type={movie.type} image={movie.imageUrl} key={i} rank={movie.rank} releaseDate={movie.releaseDate}/> 
         </Link>
    ));
    return (
        <div style={{display:"flex",flexWrap:"wrap",alignItems:"flex-start"}}>
           {sortedMovieList}
        </div>
    )
        
}

export default CardList;    