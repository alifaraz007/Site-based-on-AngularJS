var aliApp = angular.module("myAngApp", ['ngRoute', 'ngAnimate']);
aliApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/home',{
            templateUrl: 'content/view/home.html',
            controller: 'aliController'
    })
        .when('/contact-success',{
            templateUrl: 'content/view/contact-success.html',
            controller: 'aliController'
    })
        .when('/contact',{
            templateUrl: 'content/view/contact.html',
            controller: 'contactController'
    })
        .when('/directory',{
            templateUrl: 'content/view/directory.html',
            controller: 'aliController'
    }).otherwise({
            redirectTo: '/home'
    });
}]);
aliApp.controller("contactController",['$scope', '$location', function($scope, $location){
    $scope.sendMessage = function(){
        $location.path('/contact-success');
    }
}]);
aliApp.controller("aliController",['$scope', '$http', function($scope, $http){
  $scope.removeIt = function(a){
    var removed = $scope.data.indexOf(a);
    $scope.data.splice(removed, 1);
  }
  $scope.addData = function(){
     $scope.data.push({
         name: $scope.newData.name,
         job: $scope.newData.job,
         salary: parseInt($scope.newData.salary),
         hair: $scope.newData.hair,
         av: true
     });
     $scope.newData.name = "";
     $scope.newData.job = "";
     $scope.newData.salary = "";
     $scope.newData.hair = "";
  }
  $scope.removeAll = function(){
      $scope.data = [];
  }
  $http.get('data/data.json').then(function(responce){
    $scope.data = responce.data;
  });
}]);
aliApp.directive("aliBaba",[function(){
    return {
        restrict: "E",
        scope: {
            title: "=",
            data: "="
        },
        transclude: true,
        replace: true,
        templateUrl: "content/view/alibaba.html",
        controller: function($scope){
            $scope.random = Math.floor(Math.random()*4);
        }
    }
}]);
