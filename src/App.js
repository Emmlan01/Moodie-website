import logo from './logo.svg';
import './App.css';
import { getMovieDetails } from './movieSource.js'
import MovieModel from './movieModel';
import { getCurrentWeather } from './weatherSource.js'
//import ForgotPassword from './views/forgotPasswordView.js';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; //third component

import React from "react";
import { Helmet } from "react-helmet";

const Movie = require("./reactjs/moviePresenter.js").default;
const Weather = require("./reactjs/weatherPresenter.js").default;
const Login = require("./reactjs/loginPresenter.js").default;
const Register = require("./reactjs/registerPresenter.js").default;
const ForgotPassword = require("./reactjs/forgotPasswordPresenter.js").default;
const Sidebar = require("./reactjs/sidebarPresenter.js").default;


export default
  function App(props) {

  return (
      <div className="center-center">
    <div className="center-fullscreen">
      {/* <div className="app">⁄ */}
      <Router>
        <Routes>
          <Route exact path="/home" element={(<><Weather model={props.model}/> <Movie model={props.model} /> </>)} />
          <Route exact path="/" element={<Login model={props.model}/>} />
          <Route exact path="/register" element={<Register model={props.model} />} />
          <Route exact path="/forgotPassword" element={<ForgotPassword model={props.model} />} />
        </Routes>
      </Router>
      </div>
  </div>
  );
}
/*

}*/