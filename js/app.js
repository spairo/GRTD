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

  appGrtd.controller('fooCtrl', function($scope, $http){

      //$scope.formsignup = {};

      $scope.processForm = function() {

      alert("Testing");

        $http({
              method  : 'POST',
              url     : 'api/post.php',
              data    : $.param($scope.formsignup),
              headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        })
        .success(function(data, status) {

            var resp = data.response;

            if(resp === "user created"){

                $scope.result = true;

            }else{
                $scope.result = false;
            }
        })
        .error(function(data){
            alert("Oops! Algo salio mal, intenta otra vez");
        })

        $http({
          method: 'POST',
          url: 'request-url',
          data: "message=" + message,
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        });

        function ajaxResponseInfo(uri, dat, type) {
            $.ajax({
                type: "POST",
                url: "WebService1.asmx/" + uri,
                contentType: "application/json; charset=utf-8",
                data: dat,
                dataType: "json",
                success: function (msg) {

                    var obj = new Object();
                    obj = eval(msg.d);

                    console.info("Revisando que estoy enviando");

                    if (type == 1) {
                        setInformation(obj);
                    }
                    if (type == 2) {
                        setAgentesEstado(obj);
                    }
                },
                error: function (msg) {
                    $("#divLoad").remove();
                    alert('Existe un problema con la busqueda.');
                }
            });
        }

      };
  });

  appGrtd.controller('PostCtrl', function($scope, $http) {

    $scope.formsignup = {};

    $scope.process = function() {

        alert("testing var");

        $http({
              method  : 'POST',
              url     : 'api/post.php',
              data    : $scope.formsignup,
              headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        })
        .success(function(data, status) {

            var resp = data.response;
            alert(resp);

        })
        .error(function(data){
            alert("Oops! Algo salio mal, intenta otra vez");
        })
    };
  });

  //MetadataCtrl

  /*
  appGrtd.controller('', function($scope, $http){

    $scope.albums = MyServiceAlbumasync;

    $scope.album = {};

    $scope.getAlbum = function() {

        $http({
              method  : 'POST',
              url     : '',
              data    : $.param($scope.album),
              headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        })
        .success(function(data, status) {
          $scope.meta = data.response;
          console.info(data);
          $scope.item = data.response[0].artist;

        })
        .error(function(data, status){
          console.error('Oops! Algo salio mal');
        })
    };

  });*/


  // Example Get

  //appGrtd.controller('', function($scope, $http){

  //$http.get(''/*, { cache: false }*/).success(function(data){

  		//$scope.artist = data.response;

    //});

  //});
