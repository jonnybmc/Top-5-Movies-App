import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestMovies, requestSortOrderOptions } from "../../actionCreators/movieActions";

import CardItem from '../../components/cardItem';
import CardList from '../../components/cardList';

import FilterGroup from '../../components/filterGroup';

//actions
import {sortMovies} from '../../actionCreators/movieActions';




class Home extends Component {
    constructor(props) {
        super(props);
        this.sortMovies = this.sortMovies.bind(this);
    }
  
    sortMovies(sortVal) {
       this.props.sortMovies(sortVal);
    }
    componentDidMount() {
        this.props.requestMovies();
        this.props.requestSortOrderOptions();
       
    }
    render() {
        console.log('render has occured');

        const { error, loading, movies, sortOrder,sortOrderItems } = this.props;

        if (error) {
            return <div>Error! {error.message}</div>;
        }

        if (loading) {
            console.log('loading');
            return <div>Loading...</div>;
        }
            
            return (
                
                <section>
                     <FilterGroup filters={sortOrderItems} sortMovies={this.sortMovies} currentSortOrder={sortOrder}/>
                    <CardList movies={movies} sortValue={sortOrder}/>
                    <h1>This is Home</h1>
                    <section>
                    {movies.map(movie => (
                         <CardItem image={movie.imageUrl}/> 
                    ))}
                    </section>
                    <section>
                       
                    </section>
                    
                
                </section>
            )
        

    
           
        

   
    }


}
// const mapDispatchToProps = dispatch => ({
//     requestMovies: () => dispatch(requestMovies())
// })

const mapDispatchToProps = dispatch => ({
    requestMovies : () => dispatch(requestMovies()),
    requestSortOrderOptions: () => dispatch(requestSortOrderOptions()),
    sortMovies : (sortVal) => dispatch(sortMovies(sortVal))
})

// const { currentSortOrder } = state.movies;
// //     return {
// //         filteredMovies: state.movies.items.sort((a,b) => (a[currentSortOrder] > b[currentSortOrder]) ? 1 : -1)
        
// //     }

const mapStateToProps = state => {
    return {
        sortOrder:state.movies.currentSortOrder,
        movies: state.movies.items,
        loading: state.movies.loading,
        error: state.movies.error,
        sortOrderItems: state.movies.sortOrderItems
    }  
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);