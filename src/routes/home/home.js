import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestMovies} from "../../actionCreators/movieActions";
import {requestSortOrderOptions, sortMovies } from "../../actionCreators/sortActions";

import CardItem from '../../components/cardItem';
import CardList from '../../components/cardList';

import FilterGroup from '../../components/filterGroup';

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

        const { error, loading, movies, sortOrder, sortOrderItems } = this.props;

        if (error) {
            return <div>Error! {error.message}</div>;
        }

        if (loading) {
            console.log('loading');
            return <div>Loading...</div>;
        }

        return (
            <main>
   
                <FilterGroup filters={sortOrderItems} sortMovies={this.sortMovies} currentSortOrder={sortOrder} />
                <CardList movies={movies} sortValue={sortOrder} />
                <section></section>
            </main>
        )







    }


}

const mapDispatchToProps = dispatch => ({
    requestMovies: () => dispatch(requestMovies()),
    requestSortOrderOptions: () => dispatch(requestSortOrderOptions()),
    sortMovies: (sortVal) => dispatch(sortMovies(sortVal))
})

const mapStateToProps = state => {
    return {
        sortOrder: state.sort.currentSortOrder,
        movies: state.movies.items,
        loading: state.movies.loading,
        error: state.movies.error,
        sortOrderItems: state.sort.sortOrderItems
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);