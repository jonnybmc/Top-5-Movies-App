import {

    REQUEST_SORT_ORDER_OPTIONS_START,
    REQUEST_SORT_ORDER_OPTIONS_SUCCESS,
    REQUEST_SORT_ORDER_OPTIONS_FAILURE,
    SORT_MOVIES

} from '../actionCreators/sortActions';

const initialState = {
    loading : false,
    error : null,
    sortOrderItems: [],
    currentSortOrder : "releaseDate"
}

export default (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_SORT_ORDER_OPTIONS_START:
            return {
                ...state,
                loading:true,
                error:null
            }
        case REQUEST_SORT_ORDER_OPTIONS_SUCCESS:
            return {
                ...state,
                loading:false,
                sortOrderItems: action.payload.sortOrderOptions.components[0].items
            }
        case REQUEST_SORT_ORDER_OPTIONS_FAILURE:
            return {
                ...state,
                loading:false,
                error:action.payload.error,
                sortOrderItems:[]
            }
        case SORT_MOVIES: 
            return {
                ...state,
                currentSortOrder : action.payload.sortValue
            }
        default:
            return state;
    }
}