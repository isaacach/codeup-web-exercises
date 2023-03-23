

// const SALong = -98.48537;
// const SALat = 29.423817
// function getCurrentWeather(lat, long) {
//     $.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${OPEN_WEATHER_APPID}&units=imperial`)
//         .done(data => {
//             console.log(data);
//             console.log(`the temperature is ${data.main.temp}`);
//             $('.weather').html(`the temperature is ${data.main.temp}`);
//         });
// }

const getWeather = async (long = -98.48537, lat = 29.423817) => {
    try {
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${OPEN_WEATHER_APPID}&units=imperial`);
        return await response.json();
    } catch (error) {
        console.log(error);
    }
}

const getFiveDayWeather = async (long = -98.48537, lat = 29.423817) => {
    try {
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${OPEN_WEATHER_APPID}&units=imperial`);
        return await response.json();
    } catch (error) {
        console.log(error);
    }
}

let currentPin;

document.querySelector('#search').addEventListener('click', async(e)=> {
    e.preventDefault();
    let userLocation = document.querySelector('#location').value;
    let coords = await geocode(userLocation, MAPBOX_API_TOKEN);
    console.log(coords);
    let weatherData = await getWeather(coords[0], coords[1]);
    console.log(weatherData);
    if(currentPin) {
        currentPin.remove();
    }
    currentPin = new mapboxgl.Marker()
        .setLngLat([coords[0], coords[1]])
        .addTo(map);
    map.setCenter([coords[0], coords[1]]);
});




( async ()=>{

    let weather = await getWeather();
    console.log(weather);

})()




