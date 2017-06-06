angular.module('myApp')
       .service('mainService', function($http){

this.test = 'this is a test'

this.getWeather = () =>{
  return $http.get('http://api.openweathermap.org/data/2.5/forecast?q=provo,us&APPID=a6c45a3b8b1f377d5bcdc4ecde68b577');
}

// let weatherArray = [];
//
// this.getWeather().then(function(response){
//   this.weatherData = response.data.list;
//
//
//
//   for(let i = 0;i<this.weatherData.length;i++){
//     weatherArray.push(this.weatherData[i].main.temp_max);
//   }
//   console.log('this is the weather array: '+ weatherArray);
// })
//
// this.weatherArray = weatherArray;

})
