import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router, Route, Link } from 'react-router'
import history from './history';
import MovieDetails from './Pages/Detail'
import Home from './Pages/Home'


ReactDOM.render(
  <React.StrictMode>
     <Router history = {history}>
        <Route exact path="/" component={App}/>
        <Route exact path="/details/:id" component={MovieDetails}/>
   </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
