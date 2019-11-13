import React, {Component} from 'react';
import './App.scss';

import Home from './routes/home';
import MovieDetail from './routes/movieDetail';

import {BrowserRouter as Router,Route} from 'react-router-dom';

class App extends Component {
  render(){
    return (
      <Router>
        <Route exact path="/" component= {Home}></Route>
        <Route exact path="/movies/:rank" component= {MovieDetail}></Route>
      </Router>
    )
  }
}


export default App;
