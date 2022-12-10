import { determineWeather, determineBackground } from "../utilities.js";

export default
function WeatherView(props) {
    
        return(
            
            <div>
                <div>
                {determineBackground(props.weatherData.weather[0].id)}
                </div>

                <span>

                <div className="grid place-content-center font-bold py-4 rounded text-white text-2xl">
                    <p>Looks like it's currently</p>
                </div>
                <div>
                    <p className="grid place-content-center font-Pacifico py-2 pb-8 rounded text-white text-4xl">
                    {props.weatherData.weather[0].main}
                    </p>
                </div>
                <div>
                    <p className="grid place-content-center font-bold py-4 rounded text-white text-2xl">
                        We therefore recommend the movie:
                    </p>
                </div>

                </span>

                

              </div>);
}