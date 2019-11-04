import React from 'react';
import { connect } from 'react-redux';
import CardList from './cardList-view';


const mapStateToProps = state => ({
    movies: state.movies.items
})

export default connect(mapStateToProps)(CardList);