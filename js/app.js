'use strict';

var Grtdapp = angular.module('Grtdapp', ['ui.router', 'ngAnimate', 'ui.bootstrap', 'FBAngular']);

  Grtdapp.config(function($stateProvider, $urlRouterProvider){

      $stateProvider

      .state('dashboard', {
          url: '/dashboard',
          templateUrl: 'js/views/dashboard/index.html',
      })

          //Multi Dashboard

          .state('dashboard.main', {
              url: '/main',
              templateUrl: 'js/views/dashboard/dashboard-main.html'
          })
          .state('dashboard.atc', {
              url: '/atc',
              templateUrl: 'js/views/dashboard/dashboard-atc.html'
          })
          .state('dashboard.stockpile', {
              url: '/stockpile',
              templateUrl: 'js/views/dashboard/dashboard-stockpile.html'
          })
          .state('dashboard.marketing', {
              url: '/marketing',
              templateUrl: 'js/views/dashboard/dashboard-marketing.html'
          })

      .state('cases', {
          url: '/dashboard/cases',
          templateUrl: 'js/views/dashboard/cases.html',
      })
      .state('monitor', {
          url: '/dashboard/monitor',
          templateUrl: 'js/views/dashboard/monitor.html',
      })
      .state('mails', {
          url: '/dashboard/mails',
          templateUrl: 'js/views/dashboard/mails.html',
      })

      //catch all route

      $urlRouterProvider.otherwise('/dashboard/main');

  });

  // Main Controller

  Grtdapp.controller('MainCtrl', function($scope, Fullscreen){

     $scope.goFullscreen = function(){

        if(Fullscreen.isEnabled()){
          Fullscreen.cancel();
        }
        else{
          Fullscreen.all();
        }
     };
  });

  // Dashboard Main Controller

  Grtdapp.controller('DashCtrl', function($scope, $http, $interval){

    $scope.loading = true;

    $interval(function(){

        $scope.grid = { op : 'grtd', cUmbral : '1800' };

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

            //using split
            $scope.mySplit = function(string, nb) {
              $scope.array = string.split(',');
              return $scope.result = $scope.array[nb];
            }

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

  Grtdapp.controller('UsersCtrl', function($scope, $http, $interval){

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

  // Stockpile Controller

  Grtdapp.controller('StockpileCtrl', function($scope, $http, $interval) {

    $scope.load = true;

      $interval(function(){

        $scope.stockpile = { op: "grtdArea", cUmbral: "1800", skill: "1" };

        $http({
           method : 'POST',
           url : 'api/rest.php',
           data : $.param($scope.stockpile),
           headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        })
        .success(function(data, status){

            $scope.load = false;
            $scope.general = data;
            console.info("Get Stockpile Resources >>>", status);

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
            console.error("Stockpile >>>", status, "Oops!");
        })
      },5000)

  });

  // ATC Controller

  Grtdapp.controller('ATCtrl', function($scope, $http, $interval) {

    $scope.load = true;

      $interval(function(){

        $scope.atc = { op: "grtdArea", cUmbral: "1800", skill: "2" };

        $http({
           method : 'POST',
           url : 'api/rest.php',
           data : $.param($scope.atc),
           headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        })
        .success(function(data, status){

            $scope.load = false;
            $scope.general = data;
            console.info("Get ATC Resources >>>", status);

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
            console.error("ATC >>>", status, "Oops!");
        })
      },5000)

  });

  // Marketing Controller

  Grtdapp.controller('MarketingCtrl', function($scope, $http, $interval, LoginService){

    $scope.load = true;
    //get service
    $scope.status = LoginService;

      $interval(function(){

        $scope.marketing = { op: "grtdArea", cUmbral: "1800", skill: "3" };

        $http({
           method : 'POST',
           url : 'api/rest.php',
           data : $.param($scope.marketing),
           headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        })
        .success(function(data, status){

            $scope.load = false;
            $scope.general = data;
            console.info("Get Marketing Resources >>>", status);

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
            console.error("Marketing >>>", status, "Oops!");
        })
      },5000)

  });

  // Modal Controller

  Grtdapp.controller('ModalCtrl', function($scope, $modal){

      $scope.openlogin = function (size) {

          var modalInstance = $modal.open({
            templateUrl: 'myModalLogin.html',
            controller: ModalInstanceCtrl,
            size: size,
            backdrop: 'static',
            resolve: {}
          });
      };
  });

  var ModalInstanceCtrl = function ($scope, $modalInstance) {
    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
  };

  // Login Controller

  Grtdapp.controller('LoginCtrl', function($scope, $http, $modalStack, LoginService) {

    $scope.login = { op: "validateLogin", accion: "1", cLogin: "", cPass: "" };

    $scope.Login = function() {
        $http({
           method : 'POST',
           url : 'api/rest.php',
           data : $.param($scope.login),
           headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        })
        .success(function(data, status){

            var Error = data[0].Error;
            var Nombre =  data[0].Nombre;

            $scope.LoginServ = LoginService;
            $scope.LoginServ.nodo = Error;
            $scope.LoginServ.name = Nombre;

            $modalStack. dismissAll();
        })
        .error(function(data, status){
            console.error("Login >>>", status, "Oops!");
        })
    };

  });

  // Cases Controller

  Grtdapp.controller('FindCasesCtrl', function($scope, $http){

    var a = $scope.cDn;
    var b = $scope.tMail;
    var c = $scope.userId;

    //$scope.case = { op: "buscaCasos", cDn: $scope.cDn, tMail: $scope.tMail, userId: $scope.userId };

    $scope.findcases = function(){

        alert(a);
        //Get History

        $http({
           method : 'POST',
           url : 'api/rest.php',
           data : $.param($scope.case),
           headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        })
        .success(function(data, status){

          $scope.Casos = data;
          console.info("Get Cases List >>>", status);

        })
        .error(function(data, status){
          console.error("Get Case List >>>", status, "Oops!");
        })

    };

    $scope.case2 =  { op: 'datosCliente', userId: $scope.userId, cDn: $scope.cDn, tMail: $scope.tMail }

    $scope.findInfo = function(){

        //Get Customer Info

        $http({
           method : 'POST',
           url : 'api/rest.php',
           data : $.param($scope.case2),
           headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        })
        .success(function(data, status){
          alert($scope.customersinfo);
          $scope.customersinfo = data;
          console.info("Get Customer Info >>>", status);

        })
        .error(function(data, status){
          alert("fallo");
          console.error("Get Customer Info >>>", status, "Oops!");
        })

    };

      //Pendiente
      /*
      $scope.twitt = { op: 'getInfoTwitter', twitterUserID: '288221948' };

      $http({
         method : 'POST',
         url : 'api/rest.php',
         data : $.param($scope.twitt),
         headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
      })
      .success(function(data){
        console.warn("getInfoTwitter >>>", data);
      })
      .error(function(data, status){
        console.error("getInfoTwitter", status, "Oops!");
      })
      */


  });

  // Settings Controller

  Grtdapp.controller('SettingsCtrl', function($scope, $http){
      $scope.updateSettings = function() {
        alert("not working");
      };
  });

  // Clock Live Controller

  Grtdapp.controller('TimeCtrl', function($scope, $interval){
    $interval(function(){
      $scope.time = Date.now();
    },0)
  });

  // Custom Group Controller

  Grtdapp.controller('TabsCtrl', function($scope, LoginService) {
    $scope.users = false;
    $scope.setting = false;
    $scope.state = false;
    //get services
    $scope.status = LoginService;
  });

  // Navbar Controller

  Grtdapp.controller('NavbarCtrl', function($scope, LoginService){
      $scope.navbarCollapsed = true;
      //get service
      $scope.status = LoginService;
  });

  // MultiDash Controller

  Grtdapp.controller('MultiDashCtrl', function($scope, LoginService){
    //get service
    $scope.status = LoginService;
  });

  //Factories

  //Login
  Grtdapp.factory('LoginService',function(){
    return { nodo:"", name:""};
  });
