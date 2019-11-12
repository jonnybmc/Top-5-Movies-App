import React, {Component} from 'react';
import logo from './logo.svg';
import './App.scss';

import Home from './routes/home';
import MovieDetail from './routes/movieDetail';

import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

class App extends Component {
  render(){
    return (
      <Router>
        <Route exact path="/" component= {Home}></Route>
        <Route exact path="/movies/:id" component= {MovieDetail}></Route>
      </Router>
    )
  }
}


export default App;
