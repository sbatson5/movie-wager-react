export default function reducer(state={
    movieRounds: [],
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

    switch (action.type) {
      case "FETCH_MOVIE_ROUNDS": {
        return {...state, fetching: true}
      }
      case "FETCH_MOVIE_ROUNDS_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_MOVIE_ROUNDS_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          movieRounds: action.payload,
        }
      }
    }

    return state
}
