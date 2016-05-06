/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-05-06 09:57:59
 * @version $Id$
 */
var myApp=angular.module("app",['ui.router','app.controller']);

myApp.config(function($stateProvider,$urlRouterProvider){

	$urlRouterProvider.otherwise("/demo1");
	$stateProvider
	.state('demo1',{
		url:'/demo1',
		templateUrl:'templates/demo/demo1.html',
		controller:'demoCtrl'
	})
	//多路由
	.state('demo1.route1',{
		url:'/route1/:id',
		views:{
			"item1":{
				templateUrl:'templates/demo/route1Item1.html',
				controller:'demoCtrl'
			},
			"item2":{
				templateUrl:'templates/demo/route1Item2.html',
				controller:'demoCtrl'
			}
		}
	})	
	.state('demo1.route2',{
		url:'/route2/:id',
		views:{
			"item1":{
				templateUrl:'templates/demo/route2Item1.html',
				controller:'demoCtrl'
			},
			"item2":{
				templateUrl:'templates/demo/route2Item2.html',
				controller:'demoCtrl'
			}
		}
	})	
	//单路由
	.state('demo2',{
		url:'/demo2',
		templateUrl:'templates/demo/demo2.html',
		controller:'demoCtrl'
	})
	.state('demo2.list',{
		url:'/list',
		templateUrl:'templates/demo/demo2Item.html',
		controller:'demoCtrl'
	});
});