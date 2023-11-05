const apiKey = "3e2773ab14f92099ea86bda3955ef1f4";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&city&q=";

let searchBox = document.querySelector('.search input');
let searchBtn = document.querySelector('.search button');
let weatherIcon = document.querySelector('.weather-icon');
let card = document.querySelector('.card');
let type = document.querySelector('.type');

async function checkWeather(city){
    const response = await fetch(apiUrl+city+`&appid=${apiKey}`);
    var data = await response.json();
    // return data;
    if(data.name != undefined){
        document.querySelector(".error").classList.add("none");
        document.querySelector('.weather').classList.remove('none');
        console.log(data);
        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp)+"°c";
        document.querySelector('.humidity').innerHTML = data.main.humidity+" %";
        document.querySelector('.wind').innerHTML = data.wind.speed+" Km/h";
        let weather = data.weather[0].main;
        console.log(weather);
        if(weather=="Clouds") {
            weatherIcon.src = "images/clouds.png";
            card.style.background = "linear-gradient(35deg, rgb(205, 206, 152), rgb(91, 84, 138))";
           
        }
        if(weather=="Clear"){ 
            card.style.background = "linear-gradient(135deg, rgb(223, 170, 68), rgb(123, 118, 155))";
            weatherIcon.src = "images/clear.png";
        }
        if(weather=="Fog" || weather=="Smoke" ||  weather=="Mist"){
            weatherIcon.src = "images/mist.png";
            card.style.background = "linear-gradient(135deg, rgb(174, 157, 125), rgb(123, 118, 155))";
        }
        if(weather=="Rain") {
            weatherIcon.src = "images/rain.png";
            card.style.background = "linear-gradient(135deg, rgb(20, 16, 68), rgb(91, 84, 138))";
        }
        if(weather=="Snow") {
            weatherIcon.src = "images/snow.png";
            card.style.background = "linear-gradient(135deg, rgb(255, 255, 255), rgb(101, 97, 130))";
        }
        if(weather=="Drizzle") {
            weatherIcon.src = "images/drizzle.png";
            card.style.background = "linear-gradient(135deg, rgb(115, 194, 198), rgb(101, 97, 130))";
        }
        type.innerHTML = weather;
    }else{
    document.querySelector(".error").classList.remove("none");
    document.querySelector('.weather').classList.add('none');
    }

}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})

