'use strict';
import angular from 'angular';

/* @ngInject */
function config($stateProvider, $urlRouterProvider){
    $stateProvider
        .state('Home', {
            url: '/',
            controller: 'homeController as home',
            templateUrl: 'home/home.html'
        });

    $urlRouterProvider.otherwise('/');
}

export default config;
