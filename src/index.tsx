import './index.css';

import { Link, Route, BrowserRouter as Router } from "react-router-dom";

import Login from './components/user/login/login';
import Navbar from './components/shared/navbar/navbar';
import React from "react";
import ReactDOM from 'react-dom';
import Register from './components/user/register/register';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navbar items={
          [
            "Login", 
            "Register"
          ]
        } />
    </Router>
    
    <Login />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
