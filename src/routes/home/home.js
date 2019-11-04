import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestMovies } from "../../actionCreators/movieActions";

import CardItem from '../../components/cardItem';
import CardList from '../../components/cardList';




class Home extends Component {
    componentDidMount() {
        this.props.dispatch(requestMovies());
       
    }
    render() {
        console.log(this.props);

        const { error, loading, movies } = this.props;

        if (error) {
            return <div>Error! {error.message}</div>;
        }

        if (loading) {
            return <div>Loading...</div>;
        }
            return (
                <section>
                    <CardList/>
                    <h1>This is Home</h1>
                    <section>
                    {movies.map(movie => (
                         <CardItem image={movie.imageUrl}/> 
                    ))}
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
    error: state.movies.error
})

export default connect(mapStateToProps)(Home);