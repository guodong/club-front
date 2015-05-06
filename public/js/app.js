var API = 'http://api.club.olege.com/';
var club = angular.module("club", ['ngRoute'], function($interpolateProvider){
	$interpolateProvider.startSymbol('[[');
    $interpolateProvider.endSymbol(']]');
});
club.config(function($routeProvider) {
	$routeProvider.when('/', {
		controller: 'MainCtrl',
		templateUrl: 'tpl/main.html',
	}).when('/login', {
		controller: 'LoginCtrl',
		templateUrl: 'tpl/login.html',
	}).otherwise({
		redirectTo: '/'
	});
}).controller('MainCtrl', function($scope, $route){
	
}).controller('LoginCtrl', function($scope, $route, $http){
	$scope.login = function(){
		$http({
			method: 'GET',
			url: API+'accesstoken',
			params: $scope.user
		}).success(function(d){
			if(!d.code){
				location.href="#/";
			}else{
				alert(d.msg);
			}
		});
	}
});