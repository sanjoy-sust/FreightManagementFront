var githubApp = angular.module('routerApp.github', [])
    .controller('githubController', githubController);
githubController.$inject = ['$window', '$scope', 'githubService'];

function githubController($window, $scope, githubService) {
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