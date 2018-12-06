import React, { Component } from 'react';

import MovieList from '../components/MovieList';
import { getFavorites } from '../utils'

class Favorites extends Component {
  
  state = {
    favorites: getFavorites()
  };
  
  render() {
    const {favorites} = this.state
    return (
      <div className="favorites">
        <div className="card-columns">
          <MovieList movies={favorites} />
        </div>
      </div>
    );
  }
}

export default Favorites;
