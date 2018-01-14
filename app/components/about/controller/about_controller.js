var aboutApp = angular.module('routerApp.about', [])
    .controller('aboutController', aboutController);
aboutController.$inject = ['$window', '$scope','$rootScope'];

function aboutController($window, $scope,$rootScope) {
    $rootScope.title = "About";
}