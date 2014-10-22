'use strict';

var appGrtd = angular.module('appGrtd', ['ui.router', 'ngAnimate']);

  appGrtd.config(function($stateProvider, $urlRouterProvider){

      $urlRouterProvider.otherwise('/dashboard');

      $stateProvider

      //Dashboard
      .state('dashboard', {
          url: '/dashboard',
          templateUrl: 'js/views/dashboard/index.html',
          //controller: 'ResourcesCtrl'
      })
  });

  //Form Login

  appGrtd.controller('loginCtrl', function($scope, $http){
      $scope.openLogin = function() {
        alert("foo");
        console.log("foo");
      };
  });

  // All Resources

  appGrtd.controller('ResourcesCtrl', function($scope, $http){

      $scope.grid = { op : 'grtd', cUmbral : '1800'};

      $http({
         method : 'POST',
         url : 'api/rest.php',
         data : $.param($scope.grid),
         headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
      })
      .success(function(data, status) {

          $scope.general = data;
          console.info("All Resources >>>", status);

          //Logic
          var tcase = data[0].tCasos;
          var fcase = data[0].fbCasos;
          $scope.TotalCases = tcase + fcase;
          //console.log("total cases", $scope.TotalCases);

      })
      .error(function(data, status){
          console.error("All Resources >>>", status, "Oops!");
      })
  });
