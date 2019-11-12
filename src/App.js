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
        {/* <nav>
          <ul>
            <li>
              <Link to="/"> Home </Link>
            </li>
            <li>
              <Link to="/movies/:id"> MovieDetail </Link>
            </li>
          </ul>
        </nav> */}
        <Route exact path="/" component= {Home}></Route>
        <Route exact path="/movies/:id" component= {MovieDetail}></Route>
      </Router>
    )
  }
}


export default App;
