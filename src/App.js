import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from './screens/Home';
import Favorites from './screens/Favorites';

import './assets/scss/app.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
              <Link className="navbar-brand" to="/">Ikontent</Link>

              <ul className="navbar-nav">
                <li className="nav-item active">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item active">
                  <Link className="nav-link" to="/favorites">Favorites</Link>
                </li>
              </ul>
            </div>
          </nav>
          <div className="container mt-4">
            <Route exact path="/" component={Home} />
            <Route path="/favorites" component={Favorites} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
