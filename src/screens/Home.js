import React, { Component } from 'react';

import MovieList from '../components/MovieList';

class Home extends Component {
  state = {
    q: '',
    showResult: true,
    results: []
  };

  onSearchInput = ev => {
    this.setState({ q: ev.target.value, showResult: true, });
  };

  onSearchSubmit = ev => {
    ev.preventDefault();
    this.search();
  };

  search = () => {
    this._fetch(this.state.q);
  };

  _fetch = q => {
    const url = 'http://www.omdbapi.com/?apikey=26dfba1e&type=series&s=' + q;
    fetch(url)
    .then(response => {
      if (response.ok) {
        response.json()
        .then(({Search = []}) => {
          if (!Search.length) {
            this.setState({ 
              showResult: false,
              results: [] 
            })
            return
          }
          this.setState({
            showResult: true,
            results: Search 
          })
        })
      }
    })
  }

  render() {
    const { results, showResult, q} = this.state;
    return (
      <div className="home">
        <form onSubmit={this.onSearchSubmit}>
          <div className="input-group input-group-lg my-4">
            <input 
              type="text"
              required
              className="form-control" 
              placeholder="Type name of the Movie" 
              aria-describedby="search-button"
              onChange={this.onSearchInput}
              value={this.state.q} />
            <div className="input-group-append">
              <button 
                className="btn btn-primary" 
                type="submit" 
                id="search-buton">Search</button>
            </div>
          </div>
        </form>
        
        {!showResult && q.length> 0 &&
          <div className="alert alert-primary" role="alert">
            Sorry :( but no results
          </div>
        }

        <div className="card-columns">
          <MovieList movies={results} />
        </div>

      </div>
    );
  }
}

export default Home;
