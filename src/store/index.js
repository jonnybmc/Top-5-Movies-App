import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import appReducer from '../reducers';

export default function storeInit(initialState={}) {
    return createStore(
        appReducer,
        initialState,
        applyMiddleware(thunk)
    );
}