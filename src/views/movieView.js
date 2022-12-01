
export default
function MovieView(props) {

    console.log(props)

        function rerollMovieACB(onClick) {
            props.clickOnReroll(props.movieData.id)
        }

        //if (!props.movieData || props.movieData.length === 0)
        //{
        //return null;
        //}

        return(<span>
            <img src={"https://image.tmdb.org/t/p/w500"+props.movieData.backdrop_path} height="300"></img>
            <div>
            <button onClick={rerollMovieACB}>Get a new movie!</button>
                {props.movieData.original_title}</div>
            </span>);
}
