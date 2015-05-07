var API = 'http://api.club.olege.com/';
var club = angular.module("club", ['ngRoute'], function($interpolateProvider){
	$interpolateProvider.startSymbol('[[');
    $interpolateProvider.endSymbol(']]');
});
club.config(function($routeProvider, $httpProvider) {
	$httpProvider.defaults.withCredentials = true;
	$routeProvider.when('/', {
		controller: 'MainCtrl',
		templateUrl: 'tpl/main.html',
	}).when('/login', {
		controller: 'LoginCtrl',
		templateUrl: 'tpl/login.html',
	}).when('/ranking', {
		controller: 'rankingCtrl',
		templateUrl: 'tpl/ranking.html',
	}).when('/activities_future', {
		controller: 'activities_futureCtrl',
		templateUrl: 'tpl/activities_future.html',
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

}).controller('rankingCtrl', function($scope, $route){

}).controller('activities_futureCtrl', function($scope, $route){

});