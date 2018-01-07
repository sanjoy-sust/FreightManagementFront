githubApp.factory('githubService', githubService);
githubService.$inject = ['$http', '$q', '$timeout'];

function githubService($http, $q, $timeout) {

    function getBootstrapProjects() {
        var projects = [];
        return $http.get('https://api.github.com/repos/twbs/bootstrap')
            .then(function (response) {
                console.log(response.data);
                return response.data;
            }, function (reason) {
                return null;
            });
    }
    return {
        getBootstrapProjects : getBootstrapProjects
    };
}