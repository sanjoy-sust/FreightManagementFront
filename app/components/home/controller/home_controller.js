var homeApp = angular.module('routerApp.home',[])
    .controller('homeController',homeController);

homeController.$inject = ['$window','$rootScope', '$scope','homeService'];

 function homeController($window,$rootScope,$scope,homeService) {
     $rootScope.title = "Dashboard";
     $rootScope.subMenu = "home";
     var followers = homeService.getFollowersOfTweeter();
     followers.then(function (response) {
             $scope.followers =12; /*response[0].followers_count;
             console.log(response)*/ },
         function (reason) {

         })
 };
