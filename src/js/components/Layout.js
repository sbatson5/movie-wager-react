import React from "react";
import { connect } from "react-redux";

import { fetchMovieRounds } from "../actions/movieRoundActions";

@connect((store) => {
  return {
    movieRounds: store.movieRounds.movieRounds
  };
})
export default class Layout extends React.Component {
  componentWillMount() {
    this.getMovieRounds();
  }

  getMovieRounds() {
    this.props.dispatch(fetchMovieRounds());
  }

  render() {
    const { movieRounds } = this.props;

    if (!movieRounds.length) {
      return <button onClick={this.getMovieRounds.bind(this)}>load movie</button>
    }

    const mappedRounds = movieRounds.map((round) => {
      return <li key={round.id}>Title: {round.title}</li>
    });

    return <div>
      <ul>{mappedRounds}</ul>
    </div>
  }
}
