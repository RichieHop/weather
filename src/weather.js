// import addIcon from "./images/add.png";
import { displayWeather, renderWeather } from './weather_dom.js';

const vcQueryStart = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline";
const bdQueryStart = "https://api-bdc.net/data/reverse-geocode?latitude="
const vcApiKey = process.env.VC_API_KEY;
const bdApiKey = process.env.BD_API_KEY;

const unitGroup = "metric";

const summary = document.getElementById("weatherSummary");

export const getWeatherData = async (location) => {
  try { 
    const responseVC = await fetch(
      `${vcQueryStart}/${encodeURIComponent(location)}?unitGroup=${unitGroup}&key=${vcApiKey}&contentType=json`
    );
    
    const dataVC = await responseVC.json();
    console.log(dataVC);
    summary.innerHTML = dataVC.currentConditions.temp + " " + dataVC.currentConditions.conditions + " " + dataVC.description;

    // Get city name from lat and long
    const responseBD = await fetch(
      `${bdQueryStart}${dataVC.latitude}&longitude=${dataVC.longitude}&localityLanguage=en&key=${bdApiKey}`
    );
    const dataBD = await responseBD.json();
    // Set the city and state/county/country in the header
    displayWeather.setWeatherFor(dataBD.locality, dataBD.principalSubdivision);
    // Render the weather data for the specified location
    displayWeather.renderWeather(dataVC.days);

    return dataVC;

  } catch (error) {
      displayWeather.setWeatherFor(" Couldn't find data for ", location);
      // throw new Error("Failed to fetch weather data");
  }
};

export function showWeather() {

}

