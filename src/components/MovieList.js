import React, { Component } from 'react';

import Movie from './Movie';
import { getFavorites, setFavorites } from '../utils'

class MovieList extends Component {
  state = {
    favorites: getFavorites()
  };

  isFavorite = (movie) => {
    return !!this.state.favorites.find(favorite => favorite.imdbID === movie.imdbID)
  }

  addToFavorites = (movie) => {
    const favorites = [...this.state.favorites, movie]
    this.setState({
      isFavorite: true,
      favorites
    })
    setFavorites(favorites)
  }

  removeFromFavorites = (movie) => {
    const favorites = this.state.favorites.filter(favorite => {
      return favorite.imdbID !== movie.imdbID
    })
    this.setState({
      isFavorite: false,
      favorites
    })
    setFavorites(favorites)
  }

  render() {
    const { movies } = this.props
    return movies.map((movie, i) => {
      return <Movie movie={movie}
      isFavorite={this.isFavorite(movie)} 
      addToFavorites={this.addToFavorites}  
      removeFromFavorites={this.removeFromFavorites}  
      key={movie.imdbID} />
    });
  }
}

export default MovieList;
