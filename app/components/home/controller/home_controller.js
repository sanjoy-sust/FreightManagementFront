var homeApp = angular.module('routerApp.home',[])
    .controller('homeController',homeController);

homeController.$inject = ['$window', '$scope','homeService'];

 function homeController($window,$scope,homeService) {

     var followers = homeService.getFollowersOfTweeter();
     followers.then(function (response) {
             $scope.followers =12; /*response[0].followers_count;
             console.log(response)*/ },
         function (reason) {

         })
 };
