export const displayWeather = (function () {

    // Set title
    function setWeatherFor(city, state) {
        const weatherFor = document.getElementById("weatherLocation");
        if (city != " Couldn't find data for ") {
            weatherFor.innerHTML = "Weather for " + city +", " + state;
        } else {
            weatherFor.innerHTML = "*** " + city + '"' + state + '", please enter a valid location ***';
        }
    }

    // Display the weather data
    function renderWeather(days) {
        var arrayLength = days.length;
        for (var i = 0; i < arrayLength; i++) {
            console.log("Temp for " + days[i].datetime + " - " + days[i].temp);
        }
    }

    return {
        setWeatherFor,
        renderWeather
    }
})();
