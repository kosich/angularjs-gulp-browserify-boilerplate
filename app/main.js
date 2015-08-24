'use strict';

var angular = require('angular');

// angular modules
require('angular-ui-router');
require('./templates');
require('./home/home.module.js');

// create and bootstrap application
angular.element(document).ready(function() {

  // mount on window for testing
  window.app = angular
    .module('app', [
        'ui.router',
        'templates',
        'home'
    ]);


  angular.bootstrap(document, ['app']);

});
