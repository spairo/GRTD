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

        $scope.items = data;

        //$scope.item = data[0].Bano;
        //$scope.firmados = data.Firmados;
        //$scope.artist = data.response;
        //console.warn("Soy el Data =>", $scope.item);
        console.info("All Resources >>>", status);

        //var user_role = data.user_role;
        //$scope.Nodeasync = MyServiceNodeasync;
        //$scope.Nodeasync.nodo = user_node;
        //$scope.Nodeasync.role = user_role;
    })
    .error(function(data, status){
        console.error("All Resources >>>", status, "Oops!");
    })
  });
