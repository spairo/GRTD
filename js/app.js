'use strict';

var appGrtd = angular.module('appGrtd', ['ui.router', 'ngAnimate', 'ui.bootstrap']);

  appGrtd.config(function($stateProvider, $urlRouterProvider){

      $urlRouterProvider.otherwise('/dashboard');

      $stateProvider

      //Dashboard
      .state('dashboard', {
          url: '/dashboard',
          templateUrl: 'js/views/dashboard/index.html',
      })
  });

  // Dashboard Controller

  appGrtd.controller('DashCtrl', function($scope, $http, $interval){
    $interval(function(){

        $scope.grid = { op : 'grtd', cUmbral : '1800'};

        $http({
           method : 'POST',
           url : 'api/rest.php',
           data : $.param($scope.grid),
           headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        })
        .success(function(data, status){

            $scope.general = data;
            console.info("All Dash Resources >>>", status);

            //Logic
            var tcase = data[0].tCasos;
            var fcase = data[0].fbCasos;
            $scope.TotalCases = tcase + fcase;
            //console.log("total cases", $scope.TotalCases);

        })
        .error(function(data, status){
            console.error("All DashCtrl Resources >>>", status, "Oops!");
        })
    },5000)
  });

  // Users Controller

  appGrtd.controller('UsersCtrl', function($scope, $http, $interval){

    $scope.loading = true;

    $interval(function(){

      $scope.data = { op : 'getAgentesEstado'};

      $http({
         method : 'POST',
         url : 'api/rest.php',
         data : $.param($scope.data),
         headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
      })
      .success(function(data, status){

          $scope.loading = false;

          $scope.users = data;
          console.info("All Users >>>", status);

      })
      .error(function(data, status){
          console.error("All Users >>>", status, "Oops!");
      })

    },5000)
  });


  // Login Modal

  var ModalLoginCtrl = function ($scope, $modal) {

      $scope.openlogin = function (size) {

          var modalInstance = $modal.open({
            templateUrl: 'myModalLogin.html',
            controller: ModalInstanceCtrl,
            size: size,
            backdrop: 'static',
            resolve: {

            }
          });
      };
  };

  var ModalInstanceCtrl = function ($scope, $modalInstance) {
    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
  };

  // Login Controller

  appGrtd.controller('LoginCtrl', function($scope, $http) {

    $scope.login = {};

    $scope.Login = function() {

      $scope.data = { op : 'validateLogin', accion : '1'};

      $http({
         method : 'POST',
         url : 'api/rest.php',
         data : $.param($scope.data),
         headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
      })
      .success(function(data, status){
          //$scope.users = data;
          console.info(data);
      })
      .error(function(data, status){
          console.error("Login >>>", data + status, "Oops!");
      })

    };

  });

  // Clock Live Controller

  appGrtd.controller('TimeCtrl', function($scope, $interval){
    $interval(function(){
      $scope.time = Date.now();
    },0)
  });

  // Custom Group Button

  appGrtd.controller('TabsCtrl', function($scope) {

    $scope.users = false;
    $scope.cranes = false;
    $scope.bird = false;

  });
