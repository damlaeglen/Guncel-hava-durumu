var url = 'https://api.openweathermap.org/data/2.5/'
var key = 'd898280bcf97ebc53e6cfd96eec3a473'







var search = document.querySelector('#searchBar') 
search.addEventListener ('keypress' , setQuery)





var setQuery = (e) => {
    if(e.keyCode == '13')
       getResult(search.value)
   }
   
   
   var getResult = (cityName) => {
       console.log(cityName);
   }