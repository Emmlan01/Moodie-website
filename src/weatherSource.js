import { API_KEY, BASE_URLCORD, BASE_URLWEATHER } from "./weatherConfig";

// ACB to check the HTTP status code. If !200, throw an error.
function treatHTTPResponseACB(response){

    if(!response.ok)  {
        console.log("hej!")
    throw new Error("Something that wasn't supposed to happen, happened: " + response.status);
    }
    
    return response.json();
}

/*
function getCurrentWeather(location) {
    function transformSearchResultsACB(response){
        console.log("huh", response)
        return response;
    }
    // fetch to get recipe info and return a (pinky)promise. Metric för att få i celsius
    return fetch(BASE_URLWEATHER + location + "&units=metric" + "&appid=" + API_KEY, {
        method: 'GET',
    }
    ).then(treatHTTPResponseACB).then(transformSearchResultsACB);
}
/*Hämta koordinaterna*/
function getWeather(lat, lon) {

    function transformSearchResultsACB(response){

        return response;
    }

    // fetch to get recipe info and return a (pinky)promise. 
    return fetch(BASE_URLCORD + lat + "&lon=" + lon + "&units=metric" + "&appid=" + API_KEY, {
        method: 'GET',
    }
    ).then(treatHTTPResponseACB).then(transformSearchResultsACB);
}

export {getWeather}