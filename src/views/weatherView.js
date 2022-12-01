export default
function MovieView(props) {



    console.log("props in MovieView", props)

        function rerollMovieACB(onClick) {
            props.clickOnReroll(onClick)
        }

        //if (!props.movieData || props.movieData.length === 0)
        //{
        //return null;
        //}

        return(<span onClick={rerollMovieACB(props.weatherData)}>
            <img src={"http://openweathermap.org/img/w/"+props.weatherData.backdrop_path} height="300"></img>
            <div>
            <button>Get a new movie!</button>
                {props.weatherData.original_title}lol</div>
            </span>);
}