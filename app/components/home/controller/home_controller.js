angular.module('routerApp.scotch',[])
    .controller('homeController',homeController);
homeController.$inject = ['$window', '$scope'];

 function homeController($window,$scope) {

     $scope.message = 'test';

     $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];

     $scope.scotches = [
         {
             name: 'Macallan 12',
             price: 50
         },
         {
             name: 'Chivas Regal Royal Salute',
             price: 10000
         },
         {
             name: 'Glenfiddich 1937',
             price: 20000
         }
     ];
 };
