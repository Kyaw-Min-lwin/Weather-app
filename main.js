async function lookWeather() {
    let result = await fetch('https://api.openweathermap.org/data/2.5/weather?q=mandalay&appid=4a56c3d5b17cbc8e082c506721b008aa&units=metric');
    let data = await result.json();
    let lat = data.coord.lat, lon = data.coord.lon;
    let result2 = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&appid=4a56c3d5b17cbc8e082c506721b008aa&units=metric`);
    let data2 = await result2.json();
    console.log(data, data2, new Date(data2.hourly[0].dt), new Date(data2.hourly[1].dt))
    // let weatherPic = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    // console.log(weatherPic)
    // console.log(`http://openweathermap.org/img/wn/01d.png`)
}

lookWeather()
let count = 0
for (let i = 1; i <= 100; i += 2) {
    count++;
}
console.log(count)