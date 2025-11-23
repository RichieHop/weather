import "./styles.css";

import { getWeatherData, showWeather } from './weather.js';

/* Storing user's device details in a variable*/
// let details = navigator.userAgent;

/* Creating a regular expression 
containing some mobile devices keywords 
to search it in details string*/
// let regexp = /android|iphone|kindle|ipad/i;

/* Using test() method to search regexp in details; it returns boolean value*/
// let isMobileDevice = regexp.test(details);

// if (isMobileDevice) {
//     console.log("You are using a Mobile Device");
// } else {
//     console.log("You are using Desktop");
// }

const form = document.getElementById("search-form");
const input = document.getElementById("search-input");
const unitToggle = document.getElementById("unit-toggle");

let currentWeatherData = null;
let currentUnit = 'metric'; // 'metric' for Celsius, 'imperial' for Fahrenheit

// async function fetchAndRender(location) {
//   try {
//     currentWeatherData = await getWeatherData(location); // Store data
//     renderWeather(currentWeatherData, currentUnit);
//   } catch (error) {
//     console.error("Failed to fetch weather data:", error);
//     alert("Could not retrieve weather data. Please try again.");
//   }
// }

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const location = input.value.trim();
  if (location) {
    getWeatherData(location);
    // fetchAndRender(location);
    // input.value = "";
  }
});

// unitToggle.addEventListener('click', () => {
//   currentUnit = currentUnit === 'metric' ? 'imperial' : 'metric';
//   unitToggle.classList.toggle('imperial-active');
//   if (currentWeatherData) {
//     renderWeather(currentWeatherData, currentUnit);
//   }
// });

// getWeatherData("Liverpool");
// showWeather();