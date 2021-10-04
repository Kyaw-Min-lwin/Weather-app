async function lookWeather() {
    let result = await fetch('https://api.openweathermap.org/data/2.5/weather?q=mandalay&appid=4a56c3d5b17cbc8e082c506721b008aa&units=metric');
    let data = await result.json();
    let lat = data.coord.lat, lon = data.coord.lon;
    let result2 = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&appid=4a56c3d5b17cbc8e082c506721b008aa&units=metric`);
    let data2 = await result2.json();
    console.log(data2.hourly[21]);
    let date = new Date('December 17, 1995 21:00:00');
    console.log(date.getHours())
    // let weatherPic = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    // console.log(weatherPic)
    // console.log(`http://openweathermap.org/img/wn/01d.png`)
}

lookWeather()