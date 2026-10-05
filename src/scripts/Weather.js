var cityName = "Hyderabad";
var API_KEY = "42addb9496f6c3c8c3535b7eeddf46fa";


function LoadWeather(){

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`)

    .then(function(response){

        return response.json();

    })

    .then(function(data){
        console.log(data);

        document.getElementById("lblCity").innerHTML = data.name;

        document.getElementById("lblTemp").innerHTML = `${data.main.temp.toFixed(0)}&deg;C`;

        document.getElementById("lblDescription").innerHTML = data.weather[0].description.toUpperCase();

        document.getElementById("lblHumidity").innerHTML = `${data.main.humidity} <span class="bi bi-thermometer"></span>`

        document.getElementById("lblSpeed").innerHTML = `${data.wind.speed.toLocaleString('en-in',{ style:'unit', unit:'kilometer-per-hour' })} <span class="bi bi-wind"></span>`;

    })

}



function SearchClick(){

    cityName = document.getElementById("txtCity").value;

    LoadWeather();

}

function CityWeather(cityname){

    cityName = cityname;

    LoadWeather();

}
