
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

        return(<div>
            <img className="object-contain h-48 w-96 m-auto rounded shadow-sm" src={"https://image.tmdb.org/t/p/w500"+props.movieData.backdrop_path}></img>
            <div className="content-center">
                <div className="grid place-items-center font-bold py-3 rounded text-white text-2xl">{props.movieData.original_title}
            <button className=" bg-white drop-shadow text-black font-bold my-5 py-2 px-2 rounded" onClick={rerollMovieACB}>Get a new movie!</button>
            </div>
            </div>
            </div>);
}
