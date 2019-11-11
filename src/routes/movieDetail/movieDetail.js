import React, {Component} from 'react';
import {connect} from 'react-redux';

import { requestMovies, requestSortOrderOptions, sortMovies } from "../../actionCreators/movieActions";

import CardItemDetail from '../../components/cardItemDetail';

class MovieDetail extends Component {


    constructor(props){
        super(props);
    }
    componentDidMount(){
        

    }

    render() {
        let {movies} = this.props;
        if (movies) {
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