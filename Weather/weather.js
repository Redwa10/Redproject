//8b943e95a19ce7bf485257613186b45b
const date = document.getElementById('date');
const city = document.getElementById('city');
const temp = document.getElementById('temp');
const tempImg = document.getElementById('tempImg');
const description = document.getElementById('description');
const tempMax = document.getElementById('tempMax');
const tempMin = document.getElementById('tempMin');


const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let dateObj = new Date();
let month = months[dateObj.getUTCMonth()];
let day = dateObj.getUTCDate();
let year = dateObj.getUTCFullYear();

date.innerHTML = `${month} ${day}, ${year}`;


const app = document.getElementById('app');

const getWeather = async () => {
    const cityName = document.getElementById('searchBarInput').value;

    const weatherDataFetch = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=8b943e95a19ce7bf485257613186b45b&units=metric`, 
      {
        headers: {
          Accept: "application/json"
        }
      }
    );

    const weatherDataJson = await weatherDataFetch.json();
    console.log(weatherDataJson);
    city.innerHTML = `${weatherDataJson.name}`
    description.innerHTML = `${weatherDataJson.weather[0].main}`
    tempImg.innerHTML = `<img src="http://openweathermap.org/img/wn/${weatherDataJson.weather[0].icon}.png"/>`;
    temp.innerHTML = `<h2>${Math.round(weatherDataJson.main.temp)}℃</h2>`
    tempMax.innerHTML = `${weatherDataJson.main.temp_max}℃`;
    tempMin.innerHTML = `${weatherDataJson.main.temp_min}℃`;

};
document.getElementById('searchIcon').addEventListener('click', getWeather);