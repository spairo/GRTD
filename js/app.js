'use strict';

var Grtdapp = angular.module('Grtdapp', ['ui.router', 'ngAnimate', 'ui.bootstrap']);

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

  Grtdapp.controller('MainCtrl', function($scope){});

  // Dashboard Main Controller

  Grtdapp.controller('DashCtrl', function($scope, $http, $interval){

    $scope.loading = true;

    $interval(function(){

        $http({
           method : 'POST',
           url : 'api/rest.php',
           data : $.param(  $scope.grid = { op : 'grtd', cUmbral : '1800' }),
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

      $http({
         method : 'POST',
         url : 'api/rest.php',
         data : $.param($scope.data = { op : 'getAgentesEstado'}),
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

        $http({
           method : 'POST',
           url : 'api/rest.php',
           data : $.param(scope.stockpile = { op: "grtdArea", cUmbral: "1800", skill: "1" }),
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

        $http({
           method : 'POST',
           url : 'api/rest.php',
           data : $.param(  $scope.atc = { op: "grtdArea", cUmbral: "1800", skill: "2" }),
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

        $http({
           method : 'POST',
           url : 'api/rest.php',
           data : $.param($scope.marketing = { op: "grtdArea", cUmbral: "1800", skill: "3" }),
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

  // Modal Login Controller

  Grtdapp.controller('ModalCtrl', function($scope, $modal){

      $scope.openlogin = function (size) {

          var modalInstance = $modal.open({
            templateUrl: 'myModalLogin.html',
            controller: ModalLoginInstanceCtrl,
            size: size,
            backdrop: 'static',
            resolve: {}
          });
      };
  });

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

  // Monitor Controller

  Grtdapp.controller('MonitorCtrl', function($scope, $http, $interval, $modal, DetailTwitterService){

    $scope.Alltwitter = function(){

      $scope.ShowTab = 1;
      $scope.loading = true;

      $interval(function(){
          $http({
             method : 'POST',
             url : 'api/rest.php',
             data : $.param($scope.AllTwitter =  { op: 'getDescartar', cBuscar: '0', filter: '0', nmsgid: '0' }),
             headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
          })
          .success(function(data, status){
            console.info("All Twitter Monitor >>>", status);
            $scope.monitors = data;
            $scope.loading = false;
          })
          .error(function(data, status){
            console.error("All Twitter Monitor", status, "Oops!");
          })
      },3500)
    };

    $scope.TwitterAssigned = function(){
      $scope.loading = true;
      $interval(function(){
          $http({
             method : 'POST',
             url : 'api/rest.php',
             data : $.param($scope.AllTwitter =  { op: 'getDescartar', cBuscar: '0', filter: '1', nmsgid: '0' }),
             headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
          })
          .success(function(data, status){
            console.info("Twitter Assigned Monitor >>>", status);
            $scope.TAssigned = data;
            $scope.loading = false;
          })
          .error(function(data, status){
            console.error("Twitter Assigned Monitor", status, "Oops!");
          })
      },3500)
    };

    $scope.TwitterByAssigning = function(){
      $scope.loading = true;
      $interval(function(){
        $http({
           method : 'POST',
           url : 'api/rest.php',
           data : $.param($scope.AllTwitter =  { op: 'getDescartar', cBuscar: '0', filter: '2', nmsgid: '0' }),
           headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        })
        .success(function(data, status){
          console.info("Twitter by assigning >>>", status);
          $scope.TByAssigning = data;
          $scope.loading = false;
        })
        .error(function(data, status){
          console.error("Twitter by assigning", status, "Oops!");
        })
      },3500)
    };

    $scope.TwitterDiscarded = function(){
      $scope.loading = true;
      $interval(function(){
        $http({
           method : 'POST',
           url : 'api/rest.php',
           data : $.param($scope.AllTwitter =  { op: 'getDescartar', cBuscar: '0', filter: '3', nmsgid: '0' }),
           headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        })
        .success(function(data, status){
          console.info("Twitter Discarded >>>", status);
          $scope.TDiscarded = data;
          $scope.loading = false;
        })
        .error(function(data, status){
          console.error("Twitter Discarded", status, "Oops!");
        })
      },3500)
    };

    //Twitter Details

    $scope.senddetailsT = function(){

       $http({
          method : 'POST',
          url : 'api/rest.php',
          data : $.param($scope.getdetailsT = { op: 'getHistorialCaso', caseID: '3180' }),
          headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
       })
       .success(function(data, status){
          console.info("get Details Twitter >>>", status);
          var getDT = data;

          //Send Service Details T
          $scope.DatailT = DetailTwitterService;
          $scope.DatailT.details = getDT;
       })
       .error(function(data, status){
          console.error("Get Details Twitter", status, "Oops!");
       })

       /*
       $interval(function(){

           $http({
              method : 'POST',
              url : 'api/rest.php',
              data : $.param($scope.AllDetailsTwitter =  { op: 'getHistorialCaso', cas: '1465' }),
              headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
           })
           .success(function(data){
              console.info("get Case History >>>", status);
              $scope.Tgetcases = data;
           })
           .error(function(data, status){
              console.error("get Case History", status, "Oops!");
           })

       },3500)*/
    };

    //Facebook Monitor

    $scope.Allfacebook = function(){

        $scope.ShowTab = 2;
        $scope.loading = true;

        $interval(function(){
            $http({
               method : 'POST',
               url : 'api/rest.php',
               data : $.param($scope.AllF = { op: 'getDescartarFB', idSt: '0', nFil: '0', cBuscar: '0' }),
               headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
            })
            .success(function(data, status){
              console.info("All facebook >>>", status);
              $scope.allFace = data;
              $scope.loading = false;
            })
            .error(function(data, status){
              console.error("All facebook", status, "Oops!");
            })
        },3500)
    };

    $scope.facebookAssigned = function(){
        $scope.loading = true;
        $interval(function(){
            $http({
               method : 'POST',
               url : 'api/rest.php',
               data : $.param($scope.AllF = { op: 'getDescartarFB', idSt: '0', nFil: '1', cBuscar: '0' }),
               headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
            })
            .success(function(data, status){
              console.info("facebook Assigned Monitor >>>", status);
              $scope.FAssigned = data;
              $scope.loading = false;
            })
            .error(function(data, status){
              console.error("facebook Assigned Monitor", status, "Oops!");
            })
        },3500)
    };

    $scope.facebookByAssigning = function(){
        $scope.loading = true;
        $interval(function(){
            $http({
               method : 'POST',
               url : 'api/rest.php',
               data : $.param($scope.AllF = { op: 'getDescartarFB', idSt: '0', nFil: '2', cBuscar: '0' }),
               headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
            })
            .success(function(data, status){
              console.info("facebook by assigning >>>", status);
              $scope.FByAssigning = data;
              $scope.loading = false;
            })
            .error(function(data, status){
              console.error("facebook by assigning", status, "Oops!");
            })
        },3500)
    };

    $scope.facebookDiscarded = function(){
        $interval(function(){
            $http({
               method : 'POST',
               url : 'api/rest.php',
               data : $.param($scope.AllF = { op: 'getDescartarFB', idSt: '0', nFil: '3', cBuscar: '0' }),
               headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
            })
            .success(function(data, status){
              console.info("facebook Discarded >>>", status);
              $scope.FDiscarded = data;
              $scope.loading = false;
            })
            .error(function(data, status){
              console.error("facebook Discarded", status, "Oops!");
            })
        },3500)
    };

    // Modal Twitter / Facebook Details

    $scope.openDetails = function (size, DetailTwitterService) {
        var modalInstance = $modal.open({
          templateUrl: 'ModalDetails.html',
          controller: ModalDetailsInstanceCtrl,
          size: size,
          backdrop: 'static',
          resolve: {

          }
        });
    };
  });

  //Modal Details Controller

  /*Grtdapp.controller('ModalCtrl', function($scope, $modal){

      $scope.openDetails = function (size) {

          var modalInstance = $modal.open({
            templateUrl: 'ModalDetails.html',
            controller: ModalLoginInstanceCtrl,
            size: size,
            backdrop: 'static',
            resolve: {}
          });
      };
  });
  */

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
      $scope.status = LoginService;
  });

  // MultiDash Controller

  Grtdapp.controller('MultiDashCtrl', function($scope, LoginService){
    $scope.status = LoginService;
  });

  // Modals Controllers / Features

  var ModalLoginInstanceCtrl = function ($scope, $modalInstance){
    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
  };

  var ModalDetailsInstanceCtrl = function ($scope, $modalInstance, DetailTwitterService){
    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
    $scope.DT = DetailTwitterService;
  };

  //Factories

  Grtdapp.factory('LoginService',function(){
    return { nodo:"", name:""};
  });

  Grtdapp.factory('DetailTwitterService', function(){
    return { details:"" };
  });

  // Directives
