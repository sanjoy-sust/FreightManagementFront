var githubApp = angular.module('routerApp.github', [])
    .controller('githubController', githubController);
githubController.$inject = ['$window', '$scope','$rootScope', 'githubService'];

function githubController($window, $scope,$rootScope, githubService) {
    $rootScope.title = "Github";
    var projectInfo = githubService.getProjectInfo();
    projectInfo.then(function (response) {
            $scope.projectInfo = response;
            console.log(response)
        },
        function (reason) {

        })

    var userInfo = githubService.getUserInfo();
    userInfo.then(function (response) {
            $scope.userInfo = response;
            console.log(response)
        },
        function (reason) {

        })
}