async function lookWeather(city = 'london') {
    let result = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4a56c3d5b17cbc8e082c506721b008aa&units=metric`);
    let data = await result.json();
    console.log(data)
    let lat = data.coord.lat, lon = data.coord.lon;
    let result2 = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&appid=4a56c3d5b17cbc8e082c506721b008aa&units=metric`);
    let data2 = await result2.json();
    console.log(data2);
    return data2;
    // let weatherPic = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    // console.log(weatherPic)
    // console.log(`http://openweathermap.org/img/wn/01d.png`)
}

async function todayWeather(city = 'london') {
    document.querySelector('.city').innerHTML = city;
    let weather = document.querySelector('.weather');
    let temp = document.querySelector('.temp');
    let highLow = document.querySelector('.high-low');
    let data = await lookWeather(city);
    let todayDate = new Date();
    console.log(todayDate.getDay());
}
// todayWeather()
lookWeather()