var app = angular.module('WorldCupApp', ['ngAnimate']);
app.controller('MyCtrl', function($scope, $http) {
  
  // break this out into a service
  $http.get('squads.json').
    success(function(data, status, headers, config) {
    
      console.log(status, data);
      
      $scope.players = [];
      for (var i=0; i < data.length; i++) {
        for (var y=0; y < data[i].players.length; y++)  {
          var player = data[i].players[y];
          player.nationality = data[i].nationality;
          player.photo = player.photo || "default-profile";
          $scope.players.push(player);
        } 
      }
    }).
    error(function(data, status, headers, config) {
      console.log(status, data);
    });
    
    $scope.selectedPlayer = '';
});