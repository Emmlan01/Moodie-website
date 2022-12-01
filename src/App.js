import logo from './logo.svg';
import './App.css';
import { getMovieDetails } from './movieSource.js'
import MovieModel from './movieModel';

const Movie=require("./reactjs/moviePresenter.js").default;
const Weather = require("./reactjs/WEATHERPresenter.js").default;

export default
function App(props) {
  
  return (
    <div className="flexParent">
          <Movie model={props.model}/>    
          <Weather model={props.model}/>  
    </div>
   );
}