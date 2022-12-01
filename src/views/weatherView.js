export default
function WeatherView(props) {

        console.log("RIKARD", props)

        return(<span>

                <div>
                    {props.weatherData.weather[0].main}
                </div>
                <div>
                <img src={"http://openweathermap.org/img/w/" +props.weatherData.weather[0].icon + '.png'}/>
                </div>

              </span>);
}