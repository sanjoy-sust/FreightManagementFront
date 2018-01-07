var githubApp = angular.module('routerApp.github', [])
    .controller('githubController', githubController);
githubController.$inject = ['$window', '$scope','githubService'];

function githubController($window, $scope ,githubService) {
        var projects = githubService.getBootstrapProjects();
    projects.then(function (response) {
            $scope.projects = response;
            console.log(response) },
        function (reason) {

    })
}