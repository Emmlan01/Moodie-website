import React from "react";
import './App.css';
import { getMovieDetails } from './movieSource.js'
import { getCurrentWeather } from './weatherSource.js'
import  Login  from './reactjs/loginPresenter.js';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; //third component
import  Register  from './reactjs/registerPresenter.js';
import  ForgotPassword  from './reactjs/forgotPasswordPresenter.js';


const Movie=require("./reactjs/moviePresenter.js").default;
const Weather=require("./reactjs/weatherPresenter.js").default;


export default
function App(props) {

  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/reset" element={<ForgotPassword />} />
        </Routes>
      </Router>
    </div>
   );
}
