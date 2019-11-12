import {combineReducers} from 'redux';
import movies from './movieReducer';
import sort from './sortReducer';

export default combineReducers({
    movies,
    sort
})
