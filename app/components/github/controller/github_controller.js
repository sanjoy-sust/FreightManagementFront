var githubApp = angular.module('routerApp.github', [])
    .controller('githubController', githubController);
githubController.$inject = ['$window', '$scope','$rootScope', 'githubService'];

function githubController($window, $scope,$rootScope, githubService) {
    var projectInfo = githubService.getProjectInfo();
    projectInfo.then(function (response) {
            $rootScope.title = "Github";
            $rootScope.subMenu = "github";
            $scope.projectInfo = response;
            console.log(response)
        },
        function (reason) {

        })

    var userInfo = githubService.getUserInfo();
    userInfo.then(function (response) {
            $rootScope.title = "Github User";
            $rootScope.subMenu = "github_user";
            $scope.userInfo = response;
            console.log(response)
        },
        function (reason) {

        })
}