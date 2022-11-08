//const url = 'https://api.openweathermap.org/data/2.5/'
//const key = 'd898280bcf97ebc53e6cfd96eec3a473'
//const setQuery = (e) => {
// if(e.keyCode == '13')
//    getResult(search.value)
//}

//const getResult = (cityName) => {
//   let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr` 
//   fetch(query)
//   .then(weather => {
//     return weather.json()
//   })
//   .then(displayResult)
//}
//const displayResult = (result) => {
//   let city = document.querySelector('.city')
//    city.innerHTML = `${result.name}, ${result.sys.country}`
//    let temp = document.querySelector('.temp')
//    temp.innerHTML = `${Math.round(result.main.temp)}°C`
//   let desc = document.querySelector('.desc')
//    desc.innerHTML = result.weather[0].description

//    let minmax = document.querySelector('.minmax')
//    minmax.innerHTML = `${Math.round(result.main.temp_min)}°C /
//    ${Math.round(result.main.temp_max)} °C`
//}

//const search = document.querySelector('#searchBar') 
//search.addEventListener ('keypress' , setQuery)




