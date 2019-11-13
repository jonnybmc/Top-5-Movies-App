import axios from 'axios';


//movie actions
export const REQUEST_MOVIES_START = "REQUEST_MOVIES_START";
export const REQUEST_MOVIES_SUCCESS = "REQUEST_MOVIES_SUCCESS";
export const REQUEST_MOVIES_FAILURE = "REQUEST_MOVIES_FAILURE";



export function requestMovies() {
  return async dispatch => {
    dispatch(requestMoviesStart());
    try {
      const response = await axios.get("db.json");
      dispatch(requestMoviesSuccess(response.data));

    }
    catch (error) {
      dispatch(requestMoviesFailure(error));
    }
    return;
  }
}

//action creators
export const requestMoviesStart = () => ({
  type: REQUEST_MOVIES_START
});

export const requestMoviesSuccess = data => {
  let filteredData = data.components.filter(function (el) { return el.type === "movie-list" });
  return {
    type: REQUEST_MOVIES_SUCCESS,
    payload: filteredData[0].items
  }

};

export const requestMoviesFailure = error => ({
  type: REQUEST_MOVIES_FAILURE,
  payload: { error }
});

