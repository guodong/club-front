var API = 'http://api.club.com/';
var club = angular.module("club", ['ngRoute'], function($interpolateProvider){
	$interpolateProvider.startSymbol('[[');
    $interpolateProvider.endSymbol(']]');
});
club.config(function($routeProvider) {
	$routeProvider.when('/', {
		controller: 'MainCtrl',
		templateUrl: 'tpl/main.html',
	}).otherwise({
		redirectTo: '/'
	});
}).controller('MainCtrl', function($scope, $route){
	
});