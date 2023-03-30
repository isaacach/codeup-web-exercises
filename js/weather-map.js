import {keys} from './keys.js'

mapboxgl.accessToken = keys.mapbox;

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/navigation-night-v1',
    center: [-98.48537, 29.423817],
    zoom: 9
});

// listener for toggle overlay button to hide and show the overlay
let main = document.querySelector('.container.main');
document.querySelector('.map-button').addEventListener('click', ()=>{
    main.classList.toggle('hide');
})
// setting the marker in San Antonio
let marker = new mapboxgl.Marker({draggable: true})
    .setLngLat([-98.4916, 29.4252])
    .addTo(map);

//function to get the current weather
const getWeather = async (long = -98.48537, lat = 29.423817) => {
    try {
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${keys.openweather}&units=imperial`);
        let data = await response.json();
        let weather = '';
        let dateObject = new Date(data.dt * 1000);
        document.querySelector('.title').innerText = data.name;
        weather += "<div class='weather-item'>";
        weather +=  "<div class='day'>"+dateObject.toDateString() + "</div>" ;
        weather += "<div class='data'>Current Temp: " + "<span class='temp'>"+ Math.round(data.main.temp) +" deg</span>"+ "</div>" ;
        weather += "<div class='data'>High: " + "<span class='temp'>"+ Math.round(data.main.temp_max) +" deg</span>"+ "</div>" ;
        weather += "<div class='data'>Low: "  + "<span class='temp'>"+ Math.round(data.main.temp_min) +" deg</span>" + "</div>" ;
        weather += "<div class='data'>Wind Speed: "  + "<span class='temp'>"+ Math.round(data.wind.speed) +" mph</span>" + "</div>" ;
        weather += "<div class='data'>Humidity: "  + "<span class='temp'>"+ data.main.humidity +"%</span>" + "</div>" ;
        weather += "<div class='data'>"  + "<span class='temp'>"+ data.weather[0].description +"</span>" + " </div>";
        weather += "<div class='icon'>"  + "<img class='weather-icon' alt='weather' src=''>" + " </div>";
        weather += "</div>"
        document.querySelector('#today-weather').innerHTML = weather;
        document.querySelector('.weather-icon').src = icon(data.weather[0].description);
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
// function to get the five day forecast
const getFourDayWeather = async (long = -98.48537, lat = 29.423817) => {
    try {
        let response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${keys.openweather}&units=imperial`);
        let data = await response.json();
        console.log(data)
        for (let i = 1; i < 5; i++) {
            let weather = '';
            let dateObject = new Date(data.list[i * 8].dt * 1000);
            weather += "<div class='weather-item'>";
            weather += "<div class='day'>" + dateObject.toDateString() + "</div>";
            weather += "<div class='data'>Temp: " + "<span class='temp'>" + Math.round(data.list[i * 8].main.temp) + " deg</span>" + "</div>";
            weather += "<div class='data'>Humidity: " + "<span class='temp'>" + data.list[i * 8].main.humidity + "%</span>" + "</div>";
            weather += "<div class='data'>Wind Speed: " + "<span class='temp'>" + Math.round(data.list[i * 8].wind.speed) + " mph</span>" + "</div>";
            weather += "<div class='data'>" + "<span class='temp'>" + data.list[i * 8].weather[0].description + "</span>" + " </div>";
            weather += "</div>"
            document.querySelector(`[data-dbid='${i}']`).innerHTML = weather;


        }
    } catch (error) {
        console.log(error);
    }
}


let currentPin;

document.querySelector('#search').addEventListener('click', async(e)=> {
    e.preventDefault();
    let userLocation = document.querySelector('#location').value;
    let coords = await geocode(userLocation, keys.mapbox);
    console.log(coords);
    let currentData = await getWeather(coords[0], coords[1]);
    let fourDayData = await getFourDayWeather(coords[0], coords[1]);
    console.log(currentData);
    console.log(fourDayData);
    if(marker) {
        marker.remove();
    }
    marker = new mapboxgl.Marker({draggable: true})
        .setLngLat([coords[0], coords[1]])
        .addTo(map);
    map.setCenter([coords[0], coords[1]]);
});
// click function to get weather for where a pin is placed
map.on("click", function(e) {
    getWeather(e.lngLat.lng, e.lngLat.lat);
    getFourDayWeather(e.lngLat.lng, e.lngLat.lat);

    if (marker) marker.remove();

    marker = new mapboxgl.Marker({draggable: true})
        .setLngLat([e.lngLat.lng, e.lngLat.lat])
        .addTo(map);

    document.querySelector('.container.main').classList.remove('hide');

    marker.on('dragend', onDragEnd);


});
console.log(marker);
// dragend function to get weather when pin is dragged and set
function onDragEnd() {
    let lngLat = marker.getLngLat();
    getWeather(lngLat.lng, lngLat.lat);
    getFourDayWeather(lngLat.lng, lngLat.lat);
    console.log(lngLat);
    document.querySelector('.container.main').classList.remove('hide');

}
marker.on('dragend', onDragEnd);


// calling functions to show the weather for San Antonio when page loads
getWeather()
getFourDayWeather()

// switch case function to get icons
function icon(desc) {
    switch (desc) {
        case ('clear sky'):
            return 'images/clear-sky.png';
        case ('few clouds'):
            return 'images/cloudy.png';
        case ('scattered clouds'):
            return 'images/cloudy.png';
        case ('broken clouds'):
            return 'images/cloudy.png';
        case ('shower rain'):
            return 'images/shower-rain.png'
        case ('rain'):
            return 'images/rain.png'
        case ('thunderstorm'):
            return 'images/thunderstorm.png'
        case ('snow'):
            return 'images/snow.png'
        case ('mist'):
            return 'images/mist.png'
    }
}




