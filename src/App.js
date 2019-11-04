import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import Home from './routes/home';
import MovieDetail from './routes/movieDetail';

import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

class App extends Component {
  render(){
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/"> Home </Link>
            </li>
            <li>
              <Link to="/:id"> MovieDetail </Link>
            </li>
          </ul>
        </div>

        <Route exact path="/" component= {Home}></Route>
        <Route exact path="/:id" component= {MovieDetail}></Route>
      </Router>
    )
  }
}


export default App;
