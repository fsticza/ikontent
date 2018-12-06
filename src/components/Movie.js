import React, { Component } from 'react';

class Movie extends Component {

  render() {
    const { movie, addToFavorites, removeFromFavorites, isFavorite } = this.props
    return (
      <div className="card">
        {movie.Poster !=='N/A' &&
          <img className="card-img-top" src={movie.Poster} alt={movie.Title} />
        }
        <div className="card-body">
          <h5 className="card-title">{movie.Title} ({movie.Year})</h5>
          <p className="card-text">
            <a href={`https://www.imdb.com/title/${movie.imdbID}`}>More on IMDB &raquo;</a>
          </p>
        </div>
        <div className="card-footer text-center">
          {
            isFavorite 
              ? <button 
                onClick={() => removeFromFavorites(movie)}
                className="btn btn-secundary">Remove from favorites</button>
                : <button 
                onClick={() => addToFavorites(movie)}
                className="btn btn-primary">Add to favorites</button>
          
          }
        </div>
      </div>
    );
  }
}

export default Movie;
