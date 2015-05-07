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
	}).when('/register', {
		controller: 'registerCtrl',
		templateUrl: 'tpl/register.html',
	}).when('/login', {
		controller: 'LoginCtrl',
		templateUrl: 'tpl/login.html',
	}).when('/ranking', {
		controller: 'rankingCtrl',
		templateUrl: 'tpl/ranking.html',
	}).when('/public', {
		controller: 'publicCtrl',
		templateUrl: 'tpl/public.html',
	}).when('/activities_now_list', {
		controller: 'activities_now_listCtrl',
		templateUrl: 'tpl/activities_now_list.html',
	}).when('/activities_future', {
		controller: 'activities_futureCtrl',
		templateUrl: 'tpl/activities_future.html',
	}).when('/activities_detail', {
		controller: 'activities_detailCtrl',
		templateUrl: 'tpl/activities_detail.html',
	}).when('/fabu', {
		controller: 'fabuCtrl',
		templateUrl: 'tpl/fabu.html',
	}).otherwise({
		redirectTo: '/'
	});
}).controller('MainCtrl', function($scope, $route){
	
}).controller('registerCtrl', function($scope, $route, $http){
	$scope.submit = function(){
		$http({
			method: 'POST',
			url: API+'user',
			data: $scope.user
		}).success(function(d){
			if(!d.code){
				location.href="#/";
			}else{
				alert(d.msg);
			}
		});
	}
	
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

}).controller('publicCtrl', function($scope, $route){

}).controller('activities_now_listCtrl', function($scope, $route, $http){
    $http({
    	method: 'GET',
    	url: API+'activity'
    }).success(function(d){
    	if(!d.code){
    		alert("Get List Successful");
    	}else{
    		alert(d.msg);
    	}
    });

}).controller('activities_futureCtrl', function($scope, $route){

}).controller('activities_detailCtrl', function($scope, $route, $http){
    $http({
    	method: 'GET',
    	url: API+'activity/'+'7af47d13-6ba4-417b-8f59-9ec8694ddfa7'
    }).success(function(d){
    	if(!d.code){
    	    $scope.activity_name=d.data.name;
    	    $scope.activity_address=d.data.address;
    	}else{
    		alert(d.msg);
    	}
    });

}).controller('fabuCtrl', function($scope, $route, $http){
    $scope.submit = function(){
        $http({
        	method: 'POST',
    	    url: API+'activity',
    	    params: $scope.my_activity
        }).success(function(d){
    	    if(!d.code){
    		    location.href="#/";
    	    }else{
    		    alert(d.msg);
    	    }
        });
    }

});