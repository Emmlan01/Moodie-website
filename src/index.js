import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import firebase from "firebase/app";
import "firebase/database";
import {render} from "react-dom";


// // using require() instead of import, for the above assignments to take effect before ReactRoot is loaded
const ReactRoot=require("./reactRoot.js").default;

render(
  <ReactRoot/>,
  document.getElementById('root')
);     

