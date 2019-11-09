import axios from 'axios';

//thunk actions
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


export function requestMovies() {
    return async dispatch => {
        dispatch(requestMoviesStart());
        try {
          const response = await axios.get("http://localhost:5000/db.json");
          dispatch(requestMoviesSuccess(response.data));
        
        }
        catch(error) {
          dispatch(requestMoviesFailure(error));
        }
         return 'done';
      }
}

//action
export const REQUEST_MOVIES_START = "REQUEST_MOVIES_START";
export const REQUEST_MOVIES_SUCCESS = "REQUEST_MOVIES_SUCCESS";
export const REQUEST_MOVIES_FAILURE = "REQUEST_MOVIES_FAILURE";

export const REQUEST_SORT_ORDER_OPTIONS_START = "REQUEST_SORT_ORDER_OPTIONS_START";
export const REQUEST_SORT_ORDER_OPTIONS_SUCCESS = "REQUEST_SORT_ORDER_OPTIONS_SUCCESS";
export const REQUEST_SORT_ORDER_OPTIONS_FAILURE = "REQUEST_SORT_ORDER_OPTIONS_FAILURE";

export const SORT_BY_RELEASE_DATE = "SORT_BY_RELEASE_DATE";
export const SORT_BY_RANK = "SORT_BY_RANK";

export const SORT_MOVIES = "SORT_MOVIES";



//action creators
export const requestMoviesStart = () => ({
    type: REQUEST_MOVIES_START
});

export const requestMoviesSuccess = movies => ({
    type: REQUEST_MOVIES_SUCCESS,
    payload: { movies }
});

export const requestMoviesFailure = error => ({
    type: REQUEST_MOVIES_FAILURE,
    payload: { error }
});

export const requestSortOrderOptionsStart = () => ({
  type: REQUEST_SORT_ORDER_OPTIONS_START
});

export const requestSortOrderOptionsSuccess = sortOrderOptions => ({
  type: REQUEST_SORT_ORDER_OPTIONS_SUCCESS,
  payload : {sortOrderOptions}
});

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