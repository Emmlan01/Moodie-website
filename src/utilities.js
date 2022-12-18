
// This function prints out the name of the weathertype in the console based on the supplied weatherID.
function determineWeather(weatherID) {

        if (weatherID > 199 && weatherID < 233)
            console.log("THUNDERSTORM")
        else if  (weatherID > 299 && weatherID < 322)
            console.log("DRIZZLE")
        else if  (weatherID > 499 && weatherID < 532)
            console.log("RAIN")
        else if  (weatherID > 599 && weatherID < 623)
            console.log("SNOW")
        else if  (weatherID > 700 && weatherID < 782) 
            console.log("MIST")
        else if  (weatherID === 800)
            console.log("CLEAR")
        else if (weatherID > 800 && weatherID < 805) {
        console.log("CLOUDY")
       }
}


function determineBackground(weatherID) {
    if (weatherID > 199 && weatherID < 233) {
        return <section class="rain-container">
            <div className="rain">
            <div className="thunder">
            </div>
            </div>
            </section>
    }
    else if  (weatherID > 299 && weatherID < 322) {
        return <div className="drizzle"></div>
    }


    else if  (weatherID > 499 && weatherID < 532) {
        return <section className="rain-container">

            <div className="rain">
            </div>
            </section>
    }

    else if  (weatherID > 599 && weatherID < 623) {
       return <div className="snow"></div>
    }

    else if  (weatherID > 700 && weatherID < 782) {
        return <section class="mist">
            <div class="mist-container">
            <div class="mist-img mist-img-first"></div>
            <div class="mist-img mist-img-second"></div>
            </div>
            </section>
    }


    else if  (weatherID === 800) {
        return;
    }

    else if (weatherID > 800 && weatherID < 805) {
        return <div className="clouds"></div>
            
    }
}

export {determineWeather, determineBackground}