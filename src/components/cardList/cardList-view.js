import React from 'react';
import CardItem from '../cardItem';
import {Link} from 'react-router-dom';

import styles from './cardList.module.scss';


const CardList = ({movies,sortValue}) => {
    let sortedMovieList = movies.sort((a,b) => (a[sortValue] > b[sortValue]) ? 1 : -1);
     sortedMovieList = sortedMovieList.map((movie,i) => (
         <Link key={movie.id} to={`/movies/${movie.rank}`} style={{width:"10%",marginRight:"2%"}}>
            <CardItem type={movie.type} image={movie.imageUrl} key={i} rank={movie.rank} releaseDate={movie.releaseDate}/> 
         </Link>
    ));
    return (
        <section className={styles.cardListContainer}>
           {sortedMovieList}
        </section>
    )
        
}

export default CardList;    