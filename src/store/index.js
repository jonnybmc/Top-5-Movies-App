import {createStore, applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';


const initialState = {};

//add logic to subscribe to state updates  that persist to local storage

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