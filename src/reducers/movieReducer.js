import {
    REQUEST_MOVIES_START,
    REQUEST_MOVIES_SUCCESS,
    REQUEST_MOVIES_FAILURE,
} from '../actionCreators/movieActions';




const initialState = {
    items : [],
    loading : false,
    error : null
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
                    items:action.payload
                }
        case REQUEST_MOVIES_FAILURE:
            return {
                ...state,
                loading:false,
                error: action.payload.error,
                items: []
            }
        default:
            return state;
    }
}