'use strict';

import angular from 'angular';

import config from './home.config.js';
import homeController from './home.controller.js';

angular.module('home', [])
    .config(config)
    .controller('homeController', homeController);
