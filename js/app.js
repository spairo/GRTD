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

    $scope.loading = true;

    $interval(function(){

        $scope.grid = { op : 'grtd', cUmbral : '1800'};

        $http({
           method : 'POST',
           url : 'api/rest.php',
           data : $.param($scope.grid),
           headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        })
        .success(function(data, status){

            $scope.loading = false;

            $scope.general = data;
            console.info("All Dash Resources >>>", status);

            //Logic
            var tcase = data[0].tCasos;
            var fcase = data[0].fbCasos;
            $scope.TotalCases = tcase + fcase;

            var fate = data[0].fbadRec;
            var tate = data[0].tadRec;
            $scope.TotalAte = fate + tate;

            var fate = data[0].fbadAte;
            var tate = data[0].tadAte;
            $scope.TotalAte = fate + tate;

            var fEnAte = data[0].fbadEnAte;
            var tEnAte = data[0].tadEnAte;
            $scope.TotalEnAte = fEnAte + tEnAte;

            var fEsp = data[0].fbadEsp;
            var tEsp = data[0].tadEsp;
            $scope.TotalEsp = fEsp + tEsp;

            var fDes = data[0].fbadDes;
            var tDes = data[0].tadDes;
            $scope.TotalDes = fDes + tDes;

            //Set Second block Logic

            var fhrec = data[0].fbhRec;
            var threc = data[0].thRec;
            $scope.TotalHRec = fhrec + threc;

            var fhAte = data[0].fbhAte;
            var thAte = data[0].thAte;
            $scope.TotalHAte = fhAte + thAte;

            var fhEsp = data[0].fbhEsp;
            var thEsp = data[0].thEsp;
            $scope.TotalHEsp = fhEsp + thEsp;

            var fHEnAte = data[0].fbhEnAte;
            var tHEnAte = data[0].thEnAte;
            $scope.TotalHEnAte = fHEnAte + tHEnAte;

            var fbhDes = data[0].fbhDes;
            var thDes = data[0].thDes;
            $scope.TotalHDes = fbhDes + thDes;

        })
        .error(function(data, status){
            console.error("All DashCtrl Resources >>>", status, "Oops!");
        })
    },3000)
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

  // Custom Group Controller

  appGrtd.controller('TabsCtrl', function($scope) {

    $scope.users = false;
    $scope.setting = false;
    $scope.state = false;
  });

  // Navbar Controller

  appGrtd.controller('NavbarCtrl', function($scope){
      $scope.navbarCollapsed = true;
  });
