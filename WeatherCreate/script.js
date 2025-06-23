const apikey = "b5b9ecf5ae5f1f56045c66193418bb0b";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const City = document.querySelector(".city");
const Temperature = document.querySelector(".temperature");
const Humidity = document.querySelector(".humidity");
const Wind = document.querySelector(".wind");

const SearchBox = document.querySelector(".search input");
const Searchbtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

const Hidden = document.querySelector(".weather .hidden");
const Details = document.querySelector(".details");
const Sky = document.querySelector(".Skyname");

async function checkweather(city){
    const response = await fetch(apiurl + city + `&appid=${apikey}`);

    if(response.status === 404){
        alert("Invalid City name, please correct City name");
        Hidden.style.display = "none";
        Details.style.display = "none";
    }else{
        const data = await response.json();
        console.log(data);
    

        City.innerHTML = data.name;
        Temperature.innerHTML = data.main.temp + "°c";
        Humidity.innerHTML = data.main.humidity + "%";
        Wind.innerHTML = data.wind.speed + " km/h";
        weatherIcon.innerHTML = data.weather.icon;


        ImagesList(data);
        Savedata();


    function ImagesList(data){
        if(data.main.temp <= 0){
            weatherIcon.src = "./Images/winter.webp";
        }
        else if(data.main.temp >= 35){
            weatherIcon.src = "./Images/sun.webp";
        }
        else{
            ImageList(data);
        }
    }

    function ImageList(data){
        if(data.weather[0].main === "Clouds"){
            weatherIcon.style.backgroundImage = "./Images/cloud-png.webp";
            Sky.innerHTML = "Clouds";
        }
        else if(data.weather[0].main === "Rain"){
            weatherIcon.src = "./Images/rain.webp";
            Sky.innerHTML = "Rain";
        }
        else if(data.weather[0].main === "Mist"){
            weatherIcon.src = "./Images/mist.png";
            Sky.innerHTML = "Mist";
        }
        else if(data.weather[0].main === "Haze"){
            weatherIcon.src = "./Images/haze.webp";
            Sky.innerHTML = "Haze";
        }
        else if(data.weather[0].main === "Clear"){
            weatherIcon.src = "./Images/clear.png";
            Sky.innerHTML = "Clear";
        }
        else if(data.weather[0].main === "Drizzle"){
            weatherIcon.src = "./Images/drizzle.webp";
            Sky.innerHTML = "Drizzle";
        }
        else if(data.weather[0].main === "Smoke"){
            weatherIcon.src = "./Images/smoke.webp";
            Sky.innerHTML = "Smoke";
        }
        else if(data.weather[0].main === "Snow"){
            weatherIcon.src = "./Images/snow.png";
            Sky.innerHTML = "Snow";
        }
    }
    Hidden.style.display = "block";
    Details.style = "margin-top: -5px";
    }  
}

Searchbtn.addEventListener("click", function(){
    checkweather(SearchBox.value);
});



function Savedata(){
    localStorage.setItem("inputCity", SearchBox.value);
    localStorage.setItem("data.weather[0].main", weatherIcon.src);
    localStorage.setItem("city", City.innerHTML);
    localStorage.setItem("temp", Temperature.innerHTML);
    localStorage.setItem("humidity", Humidity.innerHTML);
    localStorage.setItem("windspeed", Wind.innerHTML);
    localStorage.setItem("data.weather[0].description", Sky.innerHTML);
}

function Showdata(){
    SearchBox.value = localStorage.getItem("inputCity");
    weatherIcon.src = localStorage.getItem("data.weather[0].main");
    localStorage.getItem(Hidden.style.display = "block");
    localStorage.getItem(Details.style = "margin-top: -5px");
    City.innerHTML = localStorage.getItem("city");
    Temperature.innerHTML = localStorage.getItem("temp");
    Humidity.innerHTML = localStorage.getItem("humidity");
    Wind.innerHTML = localStorage.getItem("windspeed");
    Sky.innerHTML = localStorage.getItem("data.weather[0].description");
}

Showdata();