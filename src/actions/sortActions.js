import axios from 'axios';

//sort actions
export const REQUEST_SORT_ORDER_OPTIONS_START = "REQUEST_SORT_ORDER_OPTIONS_START";
export const REQUEST_SORT_ORDER_OPTIONS_SUCCESS = "REQUEST_SORT_ORDER_OPTIONS_SUCCESS";
export const REQUEST_SORT_ORDER_OPTIONS_FAILURE = "REQUEST_SORT_ORDER_OPTIONS_FAILURE";
export const SORT_BY_RELEASE_DATE = "SORT_BY_RELEASE_DATE";
export const SORT_BY_RANK = "SORT_BY_RANK";
export const SORT_MOVIES = "SORT_MOVIES";





export function requestSortOrderOptions() {
    return async dispatch => {
      dispatch(requestSortOrderOptionsStart())
      try {
        const response = await axios.get('http://localhost:5000/db.json');
        dispatch(requestSortOrderOptionsSuccess(response.data));
      }
      catch(error){
        dispatch(requestSortOrderOptionsFailure(error));
      }
      return
    }
  }
//action creators
export const requestSortOrderOptionsStart = () => ({
    type: REQUEST_SORT_ORDER_OPTIONS_START
  });
  
  export const requestSortOrderOptionsSuccess = data => {
    let filteredData = data.components.filter(function(el){return el.type === "order-select"});
    return {
      type: REQUEST_SORT_ORDER_OPTIONS_SUCCESS,
      payload : filteredData[0].items
    }
  };
  
  export const requestSortOrderOptionsFailure = (error) => ({
    type: REQUEST_SORT_ORDER_OPTIONS_FAILURE,
    payload: {error}
  })
  
  export const sortByReleaseDate = releaseDate => ({
      type: SORT_BY_RELEASE_DATE,
      payload: {releaseDate}
  })
  
  export const sortByRank = rank => ({
    type:SORT_BY_RANK,
    payload: {rank}
  });
  
  export const sortMovies = sortValue => ({
    type: SORT_MOVIES,
    payload: {sortValue}
  })

