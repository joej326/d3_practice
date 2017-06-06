angular.module('myApp')
       .directive('myDir', function(){
         return {
           restrict: 'E',
           controller: function($scope, mainService) {
             $scope.weatherArray = [];


             mainService.getWeather().then(res => {
               $scope.weatherArray = res.data.list.map(weatherEvent => {
                 return weatherEvent.main.temp_max;
               })
             })
           },
           templateUrl: './myTemplate.html',
           link: function(scope,elem,attr){


             var canvas = d3.select('body')
                      .append('svg')
                      .attr('width',2000)
                      .attr('height',2000);



             scope.$watch('weatherArray', function() {
               console.log('Weather array changed!')

               updateBars()
             })

             function updateBars() {

               var scale = d3.scaleLinear()
                  .domain([0,d3.max(scope.weatherArray)])
                  .range([0, 50]);

               var color = d3.scaleLinear()
                        .domain([0,d3.max(scope.weatherArray)])
                        .range(['blue','red']);

               var rects = canvas.selectAll('rect')
                  .data(scope.weatherArray)
                  .enter()
                      .append('rect')
                      .attr('width',(d) => {
                        return scale(d) + 'vw'
                      })
                      .attr('height', 25)
                      .attr('y', (d, i) => { return i * 50})
                      .attr('fill', (d) => { return color(d)})
             }



           }
         }
       })
