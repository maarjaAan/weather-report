function refreshWeather(response) {
    let temperatureElement = document.querySelector("#temp");
    let cityElement = document.querySelector("#city");
    let weatherDescription=document.querySelector(".weather-description");
    let humidityElement=document.querySelector(".weather-humidity");
    let windElement=document.querySelector(".weather-wind");
    let iconElement = document.querySelector("#icon");

  
    cityElement.innerHTML = response.data.city;
    temperatureElement.innerHTML=Math.round(response.data.temperature.current);
    weatherDescription.innerHTML=response.data.condition.description;
    humidityElement.innerHTML= `${response.data.temperature.humidity}%`;
    windElement.innerHTML=`${response.data.wind.speed}km/h`;
    iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="weather-icon" />`;
  
    getForecast(response.data.city);
  }

function searchCity(city) {
    let apiKey="fd0f7619afd34b6f4ebdft43802e1ofb";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(refreshWeather);
  }
  
  function handleSearchSubmit(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-form-city");
  
    searchCity(searchInput.value);
  }
  
  let searchFormElement = document.querySelector("#search-form");
  searchFormElement.addEventListener("submit", handleSearchSubmit);
  


  let now=new Date;
  let date=now.getDate();
  let days=["Sunday","Monday","Tuesday","Wendsday","Thursday","Friday","Saturday"];
  let day=days[now.getDay()];
  let hours=now.getHours();
  let minutes=now.getMinutes();
  let weatherDate=document.querySelector("#weather-day");
  weatherDate.innerHTML=`${day} ${hours}:${minutes}`;


  function formatDay(timestamp) {
    let date = new Date(timestamp * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  
    return days[date.getDay()];
  }

function displayForecast(response) {
 

   
    let forecastHtml = "";
  
    response.data.daily.forEach(function (day,index) {
      if(index <5){
      forecastHtml =
        forecastHtml +
        `<div class="weather-forecast-day">
          <div class="weather-forecast-date">${formatDay(day.time)}</div>
          <div class="weather-forecast-icon"><img src="${day.condition.icon_url}" class="weather-forecast-icon"/></div>
          <div class="weather-forecast-temperatures">
            <span class="weather-forecast-temperature">
              <strong>${Math.round(day.temperature.maximum)}º</strong>
            </span>
            <span class="weather-forecast-temperature-min">${Math.round(day.temperature.minimum)}º</span>
          </div>
        </div>
      `;
      }
    });
  
    let forecastElement = document.querySelector("#forecast");
forecastElement.innerHTML = forecastHtml;
}

function getForecast(city){
let  apiKey ="fd0f7619afd34b6f4ebdft43802e1ofb";
let apitUrl=`https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}`;
axios.get(apitUrl).then(displayForecast);

}

searchCity("Tallinn");

  

