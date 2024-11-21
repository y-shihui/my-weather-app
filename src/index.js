function refreshWeather(response) {
  let temperatureElement = document.querySelector("#temp");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#city");

  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = Math.round(temperature);
}

function searchCity(city) {
  let apiKey = "c83b0ec93of1f1cda798a46704ft55fb";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(refreshWeather);
}

function processSearch(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-bar-input");

  searchCity(searchInput.value);
}

let searchBarElement = document.querySelector("#search-form");
searchBarElement.addEventListener("submit", processSearch);

searchCity("Singapore");
