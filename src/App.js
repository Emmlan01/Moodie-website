import logo from './logo.svg';
import './App.css';
import { getMovieDetails } from './movieSource.js'
import MovieModel from './movieModel';
import { getCurrentWeather } from './weatherSource.js'
import Login from './views/loginView.js';
import Register from './views/registerView.js';
import ForgotPassword from './views/forgotPasswordView.js';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; //third component


import React from "react";
import { Helmet } from "react-helmet";

const Movie = require("./reactjs/moviePresenter.js").default;
const Weather = require("./reactjs/weatherPresenter.js").default;

export default
  function App(props) {

  return (<div className="center-center">
    <div className="center-fullscreen">
      {/* <div className="app">⁄ */}
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/reset" element={<ForgotPassword />} />
          <Route exact path="/home" element={(<><Movie model={props.model} /><Weather model={props.model} /></>)} />
        </Routes>
      </Router>
      {/* </div> */}
    </div>
  </div>
  );
}
/*

}*/