'use strict';

/**
* @ngdoc function
* @name grtd webapp.controller:MainCtrl
* @description
* # MainCtrl
* Controller of the Grtdapp
*/

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

// Cases Module Controller

Grtdapp.controller('FindCasesCtrl', function($scope, $http, LoginService){

  //get services
  $scope.status = LoginService;

  $scope.panelcases = 0;
  $scope.findcaseT = { op: "buscaCasos", userId: "", cDn: "", tMail: "" };

  $scope.findKaseT = function(){

    //Get History

    $http({
      method : 'POST',
      url : 'api/rest.php',
      data : $.param($scope.findcaseT),
      headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
    })
    .success(function(data, status){

      $scope.panelcases = 1; //hide panel

      $scope.HCt = data;
      console.info("Get History Cases Twitter >>>", status);

      //clean subcases t
      $scope.subT = 0;

      //Sub Request Info Profile Call

            var getprofile = $scope.HCt[0].cAuthorUser_ID;

            $http({
              method : 'POST',
              url : 'api/rest.php',
              data : $.param($scope.getInfoTwitter = { op: "getInfoTwitter", twitterUserID: getprofile }),
              headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
            })
            .success(function(data, status){
              $scope.twittinfo = data;
              console.info("Get Info Profile Twitter >>>", status);
            })
            .error(function(data, status){
              console.error("Get Info Profile Twitter >>>", status, "Oops!");
            })
    })
    .error(function(data, status){
      console.error("Get Case List >>>", status, "Oops!");
    })

    //Get Information Profile

    var userIdfk = $scope.findcaseT.userId;
    var tMailfk = $scope.findcaseT.tMail;
    var cDnfk = $scope.findcaseT.tMail;

    if(userIdfk !== null || cDnfk !== null || tMailfk !== null){ //ok
      $scope.findInfo = { op: "datosCliente", userId: userIdfk, cDn: cDnfk, tMail: tMailfk }
    }

    $http({
      method : 'POST',
      url : 'api/rest.php',
      data : $.param($scope.findInfo),
      headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
    })
    .success(function(data, status){

      $scope.infoCT = data;
      console.info("Get Customer Info >>>", status);
      $scope.checkprofileinfoT = $scope.infoCT[0].cNombre;

    })
    .error(function(data, status){
      console.error("Get Customer Info >>>", status, "Oops!");
    })
  };

  // Find Sub Cases Twitter

  $scope.findSubCases = function(nCaso_ID){

      $scope.subT = 0;
      var subcasestwitter = nCaso_ID;

      $http({
        method: 'POST',
        url: 'api/rest.php',
        data: $.param($scope.findInfoT = { op: 'getHistorialCaso', caseID: subcasestwitter }),
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      })
      .success(function(data, status){
        $scope.subT = 1;
        $scope.subcaseT = data;
        console.info("Get Sub Cases Twiiter >>>", status);
      })
      .error(function(data, status){
        console.error("Get Sub Cases Twiiter >>>", status, "Oops!");
      })

  };

  // Facebook Panel

  $scope.findcaseF = { op: "buscaUsuarioFb", cDn: "", filtro: "1", numUserId: "0", tMail: "", userId: "" };
  $scope.panelcasesFb = 0; //hide panel

  $scope.findKaseF = function(){

    $http({
      method : 'POST',
      url : 'api/rest.php',
      data : $.param($scope.findcaseF),
      headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
    })
    .success(function(data, status){

      $scope.panelcasesFb = 1; //open panel
      $scope.subF = 0; //clean subcases Facebook

      $scope.findFbcases = data;
      console.info("Get Cases Facebook >>>", status);
      console.info("Get Cases Facebook Obj >>>", $scope.findFbcases);

      //Sub Request
          var getFBprofile = $scope.findFbcases[0].u2;

          $http({
            method : 'POST',
            url : 'api/rest.php',
            data : $.param($scope.getInfoFaceB = { op: "datosClienteFb", nIdUsuario: getFBprofile }),
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
          })
          .success(function(data, status){
            $scope.facebookinfo = data;
            console.info("Get Info Profile Facebook >>>", status);
          })
          .error(function(data, status){
            console.error("Get Info Profile Facebook >>>", status, "Oops!");
          })
    })
    .error(function(data, status){
      console.error("Find Facebook User >>>", status, "Oops!");
    })
  };

  // Find Sub Cases Facebook

  $scope.findFaceSubCases = function(u1){

      $scope.subF = 0;
      var subcasesface = u1;

      $http({
        method: 'POST',
        url: 'api/rest.php',
        data: $.param($scope.findInfoT = { op: 'getHistorialCasoFb', caseID: subcasesface }),
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      })
      .success(function(data, status){
        $scope.subF = 1;
        $scope.subcaseF = data;
        console.info("Get Sub Cases Facebook >>>", status);
      })
      .error(function(data, status){
        console.error("Get Sub Cases Facebook >>>", status, "Oops!");
      })
  };

  // Return to Cases

  $scope.findCaseReturn = function(){
    $scope.panelcases = 0;
    $scope.panelcasesFb = 0;
  };

});

  // Monitor Controller

  Grtdapp.controller('MonitorCtrl', function($scope, $http, $interval, $modal, DetailTwitterService, LoginService){

    //get services
    $scope.status = LoginService;

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
          $scope.loading = false;
          $scope.monitors = data;
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

    // Get/Send Twitter Details inside Modal

    $scope.senddetailsT = function(cas){

      $http({
        method : 'POST',
        url : 'api/rest.php',
        data : $.param($scope.sendTwitter = { op: 'getHistorialCaso', caseID: cas }),
        headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
      })
      .success(function(data, status){
        console.info("Get Records Twitter's Case >>>", status);
        $scope.getsubtwitterecords = data;

        //Creating Service
        $scope.DatailsT = DetailTwitterService;
        $scope.DatailsT.subcasetwitter = $scope.getsubtwitterecords;
      })
      .error(function(data, status){
        console.error("Get Records Twitter's Case >>>", status, "Oops!");
      })

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

    $scope.openDetails = function(size, DetailTwitterService){

        //$scope.post = DetailTwitterService;
        //$scope.items = ['item1', 'item2', 'item3'];
        $scope.d3 = DetailTwitterService;

        var modalInstance = $modal.open({
          templateUrl: 'ModalDetails.html',
          controller: ModalDetailsInstanceCtrl,
          size: size,
          backdrop: 'static',
          resolve: {
            items: function(){
              return $scope.items //DetailTwitterService; //DetailTwitterService; //subcasetwitter; //$scope.d3 = DetailTwitterService; $scope.status = LoginService;
            }
          }
        });


    };

  });

  // Scaled Mails Controller

  Grtdapp.controller('ScaledCtrl', function($scope, $http, LoginService){

    //get services
    $scope.status = LoginService;

    $http({
      method : 'POST',
      url : 'api/rest.php',
      data : $.param($scope.emails = { op: 'getMailEsc', mf1: '100', mf2: '0', mf3: '9' }),
      headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
    })
    .success(function(data, status){
      console.info("Scaled Emails >>>", status);
      $scope.scales = data;
    })
    .error(function(data, status){
      console.error("Scaled Emails", status, "Oops!");
    })

  });

  // Settings Controller

  Grtdapp.controller('SettingsCtrl', function($scope, $http){
    $scope.updateSettings = function() {
      alert("not working");
    };
  });

  // Clock Controller

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
