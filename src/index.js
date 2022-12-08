import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase/app";
import "firebase/database";

import mainModel from './mainModel.js'
import MovieModel from './movieModel';
import WeatherModel from './weatherModel.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
/*let movieModel = new MovieModel();
let weatherModel = new weatherModel();*/

let model = new mainModel()



root.render(
  <React.StrictMode>
    <App model={model}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
