import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import AvengersList from './components/AvengersList';
import AvengerPage from './components/AvengerPage';
import avengers from './data.js';

class App extends Component {
  // set the data equal to the state of my component
  constructor() {
    super();
    this.state = {
      avengers: avengers
    };
  }

  // Now I need to pass that state to my AvengersList component and I do that by importing it in that file...so go to that file now..

  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route exact path="/avengers" component={AvengersList} />
        <Route path="/avengers/:id" component={AvengerPage} />
      </div>
    );
  }
}

export default App;
/*
 Obejectives
 -Create a home route
 -Create an avengers route so we can show a list of avengers at that route
 */

// First step is to import Route from React react-router-dom

// next, declare my two routes
