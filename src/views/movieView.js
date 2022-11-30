export default
function MovieView(props) {

    console.log("props in MovieView", props)

        function rerollMovieACB(onClick) {
            props.clickOnReroll(onClick)
        }

        if (!props.movieData || props.movieData.length === 0)
        {
        return null;
        }

        return(<span onClick={rerollMovieACB(props.movieData)}>
            <img src={"https://image.tmdb.org/t/p/w500"+props.movieData.backdrop_path} height="300"></img>
            <div>
            <button>Get a new movie!</button>
                {props.movieData.original_title}lol</div>
            </span>);
}
