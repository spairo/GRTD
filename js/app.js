'use strict';

var appGrtd = angular.module('appGrtd', ['ui.router', 'ngAnimate']);

  appGrtd.config(function($stateProvider, $urlRouterProvider){

      $urlRouterProvider.otherwise('/dashboard');

      $stateProvider

      //Dashboard
      .state('dashboard', {
          url: '/dashboard',
          templateUrl: 'js/views/dashboard/index.html'
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

  appGrtd.controller('fooCtrl', function($scope, $http){
    //$scope.formsignup = {};
    //$scope.processForm = function() {};
  });
