import React from 'react';

const CardItemDetail = ({movies,currentMovieId}) => {
    const movie = movies.find(elem => {
        return elem.rank == currentMovieId
    });
    return (
        <article>
            <section>
                <h1>{movie.title}</h1>
            </section>
            <section>
                    <img src={movie.imageUrl}/>
                    <h3>{movie.synopsis}</h3>
                    <h4>{movie.releaseDate}</h4>
            </section>
            
        </article>
    
    )
}

export default CardItemDetail;