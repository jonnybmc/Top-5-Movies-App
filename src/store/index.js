import {createStore, applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';

import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {}

export default function storeInit(state = initialState) {
    return createStore(
        rootReducer,
        state,
        compose(
            applyMiddleware(thunk),
            window.devToolsExtension ? window.devToolsExtension() : f => f
        ) 
    );
}