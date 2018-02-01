githubApp.factory('githubService', githubService);
githubService.$inject = ['$http', '$q', '$timeout'];

function githubService($http, $q, $timeout) {

    function getProjectInfo() {
        return $http.get('https://api.github.com/repos/sanjoy-sust/FreightManagementFront')
            .then(function (response) {
                console.log(response.data);
                return response.data;
            }, function (reason) {
                return null;
            });
    };

    function getUserInfo() {
        return $http.get('https://api.github.com/users/sanjoy-sust')
            .then(function (response) {
                console.log(response.data);
                return response.data;
            }, function (reason) {
                return null;
            });
    };
    return {
        getProjectInfo : getProjectInfo,getUserInfo:getUserInfo
    };
}