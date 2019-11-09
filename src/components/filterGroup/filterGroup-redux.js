import React from 'react';
import { connect } from 'react-redux';
import FilterGroup from './filterGroup-view';




const mapStateToProps = state => ({
    movies: state.movies.items
})








export default FilterGroup;