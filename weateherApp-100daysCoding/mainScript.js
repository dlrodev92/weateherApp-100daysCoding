const key = "fad30d06888ad53cf3441decf99a6e67";
const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const inputSearch = document.querySelector(".input__search");
const searchButton = document.querySelector(".input__search__buton");
const weatherAnimation = document.querySelector(".weather-animation");
const weatherType = document.querySelector(".weather__type");
const weatherNumber = document.querySelector(".weather__number");
const cityName = document.querySelector(".city__name");
const humidNumber = document.querySelector(".humid__number");
const windNumber = document.querySelector(".wind__number");
const imageMap = {
    Clouds: "cloudy.svg",
    Clear: "clear-day.svg",
    Rain: "rain.svg",
    Drizzle: "drizzle.svg",
    Mist: "mist.svg",
    Snow: "snow.svg",
  };
  


async function getWeather(city){
    const response = await fetch(url + city + `&appid=${key}` );
    const data = await response.json();
    console.log(data);
    let dataType = data.weather[0].main;
    weatherType.innerHTML = dataType;
    weatherNumber.innerHTML = Math.round(data.main.temp);
    cityName.innerHTML = data.name;
    humidNumber.innerHTML = Math.round(data.main.humidity);
    windNumber.innerHTML = Math.round(data.wind.speed);

    if (dataType in imageMap) {
        const imageName = imageMap[dataType];
        weatherAnimation.src = `/Pictures/${imageName}`;
      }
    inputSearch.value = "";
}


getWeather("London");
searchButton.addEventListener("click", ()=>{
    const city = inputSearch.value;
    getWeather(city);
});

inputSearch.addEventListener("keydown", (event)=>{
    if(event.keyCode === 13){
        const city = inputSearch.value;
        getWeather(city);
    }
})