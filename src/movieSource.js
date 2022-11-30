import { API_KEY, BASE_URL } from "./movieConfig";

// ACB to check the HTTP status code. If !200, throw an error.
function treatHTTPResponseACB(response){

    if(!response.ok)  {
        console.log("hej!")
    throw new Error("Something that wasn't supposed to happen, happened: "+response.status);
    }
    
    return response.json();
}

function getMovieDetails(params) {

    function transformSearchResultsACB(response){
        console.log("huh", response)
        return response;
    }

    // Params equals {movie_id} - get details of certain movie with ID
    const endpoint = '/movie/'+params;

    // fetch to get recipe info and return a (pinky)promise. 
    return fetch(BASE_URL+ endpoint + "?api_key=" + API_KEY + "&language=en-US", {
        method: 'GET',
    }
    ).then(treatHTTPResponseACB).then(transformSearchResultsACB);
}
    

//Params passed as movie_id
/*function getMovieImages(params){

    // Endpoint used to search movie images.
    const endpoint = '/movie/'+'500'+'/images';

    function transformSearchResultsACB(response){
        return response.results
    }

    return fetch(BASE_URL+ endpoint + "?api_key=" + API_KEY + "&language=en-US", {
        method: 'GET',
         
    }
    ).then(treatHTTPResponseACB).then(transformSearchResultsACB);
}*/

export {getMovieDetails, /*getMovieImages*/}