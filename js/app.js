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
            console.info("Get Dash Resources >>>", status);

            //Set First Block
            $scope.TotalCases = data[0].tCasos + data[0].fbCasos;
            $scope.TotalAte = data[0].fbadRec + data[0].tadRec;
            $scope.TotalAte = data[0].fbadAte + data[0].tadAte;
            $scope.TotalEnAte = data[0].fbadEnAte + data[0].tadEnAte;
            $scope.TotalEsp = data[0].fbadEsp + data[0].tadEsp;
            $scope.TotalDes = data[0].fbadDes + data[0].tadDes;

            //Set Second block Logic
            $scope.TotalHRec = data[0].fbhRec + data[0].thRec;
            $scope.TotalHAte = data[0].fbhAte + data[0].thAte;
            $scope.TotalHEsp = data[0].fbhEsp + data[0].thEsp;
            $scope.TotalHEnAte = data[0].fbhEnAte + data[0].thEnAte;
            $scope.TotalHDes = data[0].fbhDes + data[0].thDes;

            $scope.fbTME = data[0].fbTME / 60;
            $scope.TME = data[0].TME / 60;
            $scope.TMEgral = (((data[0].fbTME + data[0].TME) / 2) /60);

            $scope.fbTME = data[0].fbTME / 60;
            $scope.TME = data[0].TME / 60;
            $scope.ME = (((data[0].fbTME + data[0].TME) / 2) /60);

            $scope.fbTMO = data[0].fbTMO /60;
            $scope.TMO = data[0].TMO / 60;
            $scope.MO = (((data[0].fbTMO + data[0].TMO) / 2) /60);

            //Set Third block Logic
            $scope.TCgen = data[0].fbCgen + data[0].tCgen;
            $scope.TCesc = data[0].fbCesc + data[0].tCesc;
            $scope.TCrev = data[0].fbCrev + data[0].tCrev;
            $scope.TfRec = data[0].fbfRec + data[0].tfRec;
            $scope.TfAte = data[0].fbfAte + data[0].tfAte;
            $scope.TfDes = data[0].fbfDes + data[0].tfDes;
            $scope.TfEsp = data[0].fbfEsp + data[0].tfEsp;
            $scope.TfEnAte = data[0].fbfEnAte + data[0].tfEnAte;

            $scope.FMEout = data[0].fbtmeFuera;
            $scope.TMEout = data[0].tmeFuera;

            $scope.AllMEout = (((data[0].fbtmeFuera + data[0].tmeFuera) / 2) / 60);

        })
        .error(function(data, status){
            console.error("All Dash Resources >>>", status, "Oops!");
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

          $compileProvider.debugInfoEnabled(true)
      })
      .error(function(data, status){
          console.error("All Users >>>", status, "Oops!");
      })

    },5000)
  });


  // Login Modal

  appGrtd.controller('ModalCtrl', function($scope, $modal){

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
  });

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
