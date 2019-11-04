import axios from 'axios';


export function requestMovies() {
    return async dispatch => {
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

export const REQUEST_MOVIES_START = "REQUEST_MOVIES_START";
export const REQUEST_MOVIES_SUCCESS = "REQUEST_MOVIES_SUCCESS";
export const REQUEST_MOVIES_FAILURE = "REQUEST_MOVIES_FAILURE";

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