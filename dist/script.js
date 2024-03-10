const apikey = "2a653191b6dc49cf5499091dfab78bd0";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const input = document.querySelector(".input");
const searchBtn = document.querySelector(".searchBtn");
const weather = document.querySelector(".mosam");

async function checkWeather(city) {
  const responce = await fetch(apiUrl + city + `&appid=${apikey}`);
  if (responce.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".result-section").style.display = "none";
  } else {
    var data = await responce.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temperature").innerHTML =
      Math.round(data.main.temp) + "⁰c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind-speed").innerHTML = data.wind.speed + " Km/h";

    if (data.weather[0].main == "Clouds") {
      weather.src = "./clouds.jpg";
    } else if (data.weather[0].main == "Clear") {
      weather.src = "./clear.jpg";
    } else if (data.weather[0].main == "Drizzle") {
      weather.src = "./drizzle.jpg";
    } else if (data.weather[0].main == "Smoke") {
      weather.src = "./mist.jpg";
    } else if (data.weather[0].main == "Rain") {
      weather.src = "./rain.jpg";
    } else if (data.weather[0].main == "Snow") {
      weather.src = "./snow.jpg";
    }
    document.querySelector(".result-section").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}
searchBtn.addEventListener("click", () => {
  checkWeather(input.value);
  console.log(checkWeather(input.value));
});
