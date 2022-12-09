import city from "./assets/city.jpg"
import { weatherData } from "./views/weatherView"

function determineWeather(weatherId) {

        if (weatherId > 199 && weatherId < 233)
            console.log("THUNDERSTORM")
        else if  (weatherId > 299 && weatherId < 322)
            console.log("DRIZZLE")
        else if  (weatherId > 499 && weatherId < 532)
            console.log("RAIN")
        else if  (weatherId > 599 && weatherId < 623)
            console.log("SNOW")
        else if  (weatherId > 700 && weatherId < 782) 
            console.log("MIST")
        else if  (weatherId === 800)
            console.log("CLEAR")
        else if (weatherId > 800 && weatherId < 805) {
            console.log("cloudsyZzZ")
        }
    }

function determineBackground(weatherId) {
    if (weatherId > 199 && weatherId < 233) {
        return <section class="rain-container">
            <div className="rain">
            <div className="thunder"></div>
            </div>
            </section>
    }
    else if  (weatherId > 299 && weatherId < 322) {
        return <div className="drizzle"></div>
    }

    else if  (weatherId > 499 && weatherId < 532) {
        return <section class="rain-container">
            <div className="rain">
            </div>
            </section>
    }

    else if  (weatherId > 599 && weatherId < 623) {
       return <div className="snow"></div>
    }

    else if  (weatherId > 700 && weatherId < 782) {
        return <section class="mist">
            <div class="absolute-bg"></div>
            <div class="mist-container">
            <div class="mist-img mist-img-first"></div>
            <div class="mist-img mist-img-second"></div>
            </div>
            </section>
    }

    else if  (weatherId === 800) {
        return;
    }

    else if (weatherId > 800 && weatherId < 805) {
        return <div className="clouds"></div>
            
    }
}

export {determineWeather, determineBackground}