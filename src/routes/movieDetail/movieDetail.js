import React, {Component} from 'react';
import {connect} from 'react-redux';

import { requestMovies } from "../../actionCreators/movieActions";
import {requestSortOrderOptions, sortMovies} from "../../actionCreators/sortActions";

import CardItemDetail from '../../components/cardItemDetail';

class MovieDetail extends Component {


    constructor(props){
        super(props);
    }
    componentDidMount(){
        if (this.props.movies.length < 1) {
            this.props.requestMovies();
        }
    }

    render() {
        let {movies} = this.props;
        if (movies.length > 0) {
            return (
                <div> 
                   <CardItemDetail movies={movies} currentMovieId={this.props.match.params.id}/>
                </div>
            )
        }
        return <div>Loading...</div>;  
    }
}

const mapDispatchToProps = dispatch => ({
    requestMovies: () => dispatch(requestMovies()),
    requestSortOrderOptions: () => dispatch(requestSortOrderOptions()),
    sortMovies: (sortVal) => dispatch(sortMovies(sortVal))
});

const mapStateToProps = state => ({
    movies: state.movies.items
})


export default connect(mapStateToProps,mapDispatchToProps)(MovieDetail);