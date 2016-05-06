/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-05-06 10:04:36
 * @version $Id$
 */
var appCtrl=angular.module('app.controller',[]);
appCtrl.controller('demoCtrl',['$scope','$stateParams',function($scope,$stateParams){
	console.log($stateParams.id);
	$scope.items=["hello jessie","hello tina"];
	$scope.things=["job","practice"];
}]);

