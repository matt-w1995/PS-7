import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { Homepage } from './Homepage';
import { About } from './About';
import { Travel } from './Travel';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Router>
              <React.Fragment>
                  <div className="container">
                      <Link to="/">Home</Link>
                      <Link to="/About">About Me</Link>
                      <Link to="/Travel">Travel</Link>
                      <Route exact path="/" component={Homepage} />
                      <Route path="/About" component={ About } />
                      <Route path="/Travel" component={Travel} />
                  </div>
              </React.Fragment>
          </Router>
      </div>
    );
  }
}

export default App;
