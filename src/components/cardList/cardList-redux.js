import React from 'react';
import { connect } from 'react-redux';
import CardList from './cardList-view';


const mapStateToProps = state => {
    const { currentSortOrder } = state.movies;
    return {
        filteredMovies: state.movies.items.sort((a,b) => (a[currentSortOrder] > b[currentSortOrder]) ? 1 : -1)
        
    }
    
}

export default connect(mapStateToProps)(CardList);