import logo from './logo.svg';
import './App.css';
import { getMovieDetails } from './movieSource.js'
import MovieModel from './movieModel';
import { getCurrentWeather } from './weatherSource.js'
import React from "react";

const Movie=require("./reactjs/moviePresenter.js").default;
const Weather=require("./reactjs/weatherPresenter.js").default;

export default
function App(props) {

  return (<div className="center-center">
    <div className="center-fullscreen">
      <Weather model={props.model}/>
      <Movie model={props.model}/>   
    </div>
    </div>
   );
}
