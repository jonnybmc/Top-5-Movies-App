import {
    REQUEST_MOVIES_START,
    REQUEST_MOVIES_SUCCESS,
    REQUEST_MOVIES_FAILURE,
    REQUEST_SORT_ORDER_OPTIONS_START,
    REQUEST_SORT_ORDER_OPTIONS_SUCCESS,
    REQUEST_SORT_ORDER_OPTIONS_FAILURE,
    ORDER_BY_RELEASE_DATE,
    ORDER_BY_RANK


} from '../actionCreators/movieActions';

const initialState = {
    items : [],
    loading : false,
    error : null,
    sortOrderItems: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_MOVIES_START:
            return {
                ...state,
                loading:true,
                error:null
            }
        case REQUEST_MOVIES_SUCCESS:
                return {
                    ...state,
                    loading:false,
                    items:action.payload.movies.components[1].items
                }
        case REQUEST_MOVIES_FAILURE:
            return {
                ...state,
                loading:false,
                error: action.payload.error,
                items: []
            }
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
        case ORDER_BY_RELEASE_DATE:
            return {
                ...state,
                sortOrder: 'release_date'
            }
        case ORDER_BY_RANK:
            return {
                ...state,
                sortOrder: 'rank'
            }
        default:
            return state;
    }
}