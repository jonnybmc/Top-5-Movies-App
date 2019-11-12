import React from 'react';
import styles from './cardItemDetail.module.scss';
import {Fragment} from 'react';
import {Link} from 'react-router-dom';

const CardItemDetail = ({ movies, currentMovieId}) => {

    const movie = movies.find(elem => {
        return elem.rank == currentMovieId
    });
    return (
        <Fragment>
        <article className={styles.cardItemDetailContainer}>
            <section className={styles.cardItemDetail__image}>
                <img src={movie.imageUrl} />
            </section>
            <section className={styles.cardItemDetail__contents}>
                <h1>{movie.title}</h1>
                <p>{movie.synopsis}</p>
                <h4>Release Date: {movie.releaseDate}</h4>
            </section> 
        </article>
         <hr style={{visibility:"hidden"}}/>
        <Link to="/" style={{color:"#fff"}}>Back to Movies</Link> 
         </Fragment>
        

    )
}

export default CardItemDetail;