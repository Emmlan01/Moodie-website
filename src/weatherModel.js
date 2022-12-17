import resolvePromise from "./resolvePromise";
import { getWeather } from "./weatherSource.js"

// DEPRECATED.

class WeatherModel {

    constructor() {
        this.weatherPromiseState = {};
    }

    getCurrentWeather(lat, lon, notify) {

        if(lat === undefined) return;

        if(lon === undefined) return;

        resolvePromise(getWeather(lat, lon), this.weatherPromiseState, notify)
    }
}

export default WeatherModel