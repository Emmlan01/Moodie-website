

function determineWeather(weatherId) {
    console.log("hej", weatherId)
        // Case Thunderstorm
        if (weatherId > 199 && weatherId < 233)
            console.log("thunderstorm")
        else if  (weatherId > 299 && weatherId < 322)
            console.log("Drizzle")
        else if  (weatherId > 499 && weatherId < 532)
            console.log("RAIN!!!!")
        else if  (weatherId > 599 && weatherId < 623)
            console.log("Snow")
        else if  (weatherId > 700 && weatherId < 782) 
            console.log("Atmosphere")
        else if  (weatherId === 800)
            console.log("ClEaR")
        else if  (weatherId > 800 && weatherId < 805)
            console.log("Clouds")
    }

export {determineWeather}