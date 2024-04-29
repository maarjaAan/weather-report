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
  
  searchCity("Paris");

  let now=new Date;
  let date=now.getDate();
  let days=["Sunday","Monday","Tuesday","Wendsday","Thursday","Friday","Saturday"];
  let day=days[now.getDay()];
  let hours=now.getHours();
  let minutes=now.getMinutes();
let weatherDate=document.querySelector("#weather-day");
weatherDate.innerHTML=`${day} ${hours}:${minutes}`;

