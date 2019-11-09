import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestMovies, requestSortOrderOptions } from "../../actionCreators/movieActions";

import CardItem from '../../components/cardItem';
import CardList from '../../components/cardList';

import FilterGroup from '../../components/filterGroup';




class Home extends Component {
    constructor(props) {
        super(props);
        this.sortMovies = this.sortMovies.bind(this);
    }
  
    sortMovies() {
        console.log('movies are now sorted');
    }
    componentDidMount() {
        this.props.dispatch(requestMovies());
        this.props.dispatch(requestSortOrderOptions());
       
    }
    render() {
        console.log(this.props);

        const { error, loading, movies, sortOrderItems } = this.props;

        if (error) {
            return <div>Error! {error.message}</div>;
        }

        if (loading) {
            console.log('loading');
            return <div>Loading...</div>;
        }
            
            return (
                
                <section>
                     <FilterGroup filters={sortOrderItems} sortMovies={this.sortMovies}/>
                    <CardList/>
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





const mapStateToProps = state => ({
    movies: state.movies.items,
    loading: state.movies.loading,
    error: state.movies.error,
    sortOrderItems: state.movies.sortOrderItems
})

export default connect(mapStateToProps)(Home);