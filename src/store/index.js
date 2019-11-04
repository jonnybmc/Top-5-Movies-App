import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';

const initialState = {}

export default function storeInit(state = initialState) {
    return createStore(
        rootReducer,
        state,
        applyMiddleware(thunk)
    );
}