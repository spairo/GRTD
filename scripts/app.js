'use strict';

var Grtdapp = angular.module('Grtdapp', ['ui.router', 'ngAnimate', 'ui.bootstrap']);

  Grtdapp.config(function($stateProvider, $urlRouterProvider){

      $stateProvider

      .state('dashboard', {
          url: '/dashboard',
          templateUrl: 'views/dashboard/index.html',
      })

          //Multi Dashboard

          .state('dashboard.main', {
              url: '/main',
              templateUrl: 'views/dashboard/dashboard-main.html'
          })
          .state('dashboard.atc', {
              url: '/atc',
              templateUrl: 'views/dashboard/dashboard-atc.html'
          })
          .state('dashboard.stockpile', {
              url: '/stockpile',
              templateUrl: 'views/dashboard/dashboard-stockpile.html'
          })
          .state('dashboard.marketing', {
              url: '/marketing',
              templateUrl: 'views/dashboard/dashboard-marketing.html'
          })

      .state('cases', {
          url: '/dashboard/cases',
          templateUrl: 'views/dashboard/cases.html',
      })
      .state('monitor', {
          url: '/dashboard/monitor',
          templateUrl: 'views/dashboard/monitor.html',
      })
      .state('mails', {
          url: '/dashboard/mails',
          templateUrl: 'views/dashboard/mails.html',
      })

      //catch all route
      $urlRouterProvider.otherwise('/dashboard/main');

  });


  // Modals Controllers / Features

  var ModalLoginInstanceCtrl = function ($scope, $modalInstance){
    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
  };

  var ModalDetailsInstanceCtrl = function ($scope, $modalInstance, items){
    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
    $scope.DT = items;
  };

  //Factories

  Grtdapp.factory('LoginService',function(){
    return { nodo:"", name:""};
  });

  Grtdapp.factory('DetailTwitterService', function(){
    return { details:"" };
  });

  // Directives
