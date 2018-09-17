'use strict';

/**
 * @ngdoc function
 * @name mnFrontendTestApp.controller:mainCtrl
 * @description
 * # mainCtrl
 * Controller of the mnFrontendTestApp
 */
angular.module('mnFrontendTestApp')
  .controller('mainCtrl', function ($scope) {
    var rndNumber = Math.floor(Math.random() * 10);
    var rndMetros = Math.floor(Math.random() * 1000);

    $scope.imoveis = [{
      'desc': 'Casa Residencial',
      'end': 'Villa Teodira',
      'cidade': 'Campinas/SP',
      'img': '../../images/thumb-imovel.png',
      'random': rndNumber,
      'metrosUtil': rndMetros,
      'metrosTotal': rndMetros
    }, {
      'desc': 'Casa Residencial',
      'end': 'Villa Teodira',
      'cidade': 'Campinas/SP',
      'img': '../../images/thumb-imovel.png',
      'random': rndNumber,
      'metrosUtil': rndMetros,
      'metrosTotal': rndMetros
    }, {
      'desc': 'Casa Residencial',
      'end': 'Villa Teodira',
      'cidade': 'Campinas/SP',
      'img': '../../images/thumb-imovel.png',
      'random': rndNumber,
      'metrosUtil': rndMetros,
      'metrosTotal': rndMetros
    }, {
      'desc': 'Casa Residencial',
      'end': 'Villa Teodira',
      'cidade': 'Campinas/SP',
      'img': '../../images/thumb-imovel.png',
      'random': rndNumber,
      'metrosUtil': rndMetros,
      'metrosTotal': rndMetros
    }, {
      'desc': 'Casa Residencial',
      'end': 'Villa Teodira',
      'cidade': 'Campinas/SP',
      'img': '../../images/thumb-imovel.png',
      'random': rndNumber,
      'metrosUtil': rndMetros,
      'metrosTotal': rndMetros
    }, {
      'desc': 'Casa Residencial',
      'end': 'Villa Teodira',
      'cidade': 'Campinas/SP',
      'img': '../../images/thumb-imovel.png',
      'random': rndNumber,
      'metrosUtil': rndMetros,
      'metrosTotal': rndMetros
    }]

  })
