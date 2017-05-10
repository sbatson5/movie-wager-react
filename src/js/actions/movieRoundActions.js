import axios from "axios";

export function fetchMovieRounds() {
  return function(dispatch) {
    axios.get("/api/v1/movie-rounds")
      .then((response) => {
        // use serializer library?
        const mappedResponse = response.data.data.map((round) => {
          round.attributes.id = round.id;
          return round.attributes;
        });

        dispatch({type: "FETCH_MOVIE_ROUNDS_FULFILLED", payload: mappedResponse})
      })
      .catch((err) => {
        dispatch({type: "FETCH_MOVIE_ROUNDS_REJECTED", payload: err})
      })
  }
}
