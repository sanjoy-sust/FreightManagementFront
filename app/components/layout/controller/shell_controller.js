/**
 * Created by Lenovo on 08/01/2018.
 */
var shellApp = angular.module('routerApp.shell', [])
    .controller('shellController', shellController);
shellController.$inject = ['$window', '$scope','shellService','$rootScope'];

function shellController($window, $scope,shellService,$rootScope) {
    $scope.navbar = [];
    var currentActive = '';
    $scope.navbar[$rootScope.subMenu] = 'active';
    console.log($rootScope.subMenu);
    $scope.clickOnSidebar = function (name) {
        if(currentActive)
        {
            $scope.navbar[currentActive] = '';
        }
        currentActive = name;
        if(name === 'logo')
        {
            $scope.navbar['home'] = 'active';
            currentActive = 'home';
        }
        $scope.navbar[name] = 'active';
        console.log($scope.navbar[name]);
    }
}