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

    //$scope.foo = cocacola;
    var foo = { op : 'grtd', cUmbral : '1800' };

    //$scope.processForm = function() {};
    $http({
      method: 'POST',
      url: 'api/rest.php',
      data: foo,
      dataType: 'json',
    });

  });
