/**
 * Created by Lenovo on 06/01/2018.
 */
pathApp.factory('pathService', pathService);
pathService.$inject = ['$http', '$q', '$timeout'];

function pathService($http, $q, $timeout) {

    function getAllPaths() {
        var paths = [];
        var pathJson = {
            "source": "Gothenburg",
            "destination": "Orlando",
            "modeOfTransports": ["All"],
            "containerSize": 20,
            "durationFrom": 20,
            "durationTo": 250,
            "costFrom": 0,
            "costTo": 4000
        };

        return $http({
            method: 'POST',
            data: pathJson,
            headers:{'X-TenantID': 'freight_management'},
            url: 'http://www.localhost:8080/path/find-all-path'
        }).then(function (response) {
            console.log(response.data);
            return response.data;
        }, function (reason) {
            return null;
        });
    };

    function savePath(path) {
        console.log(path);
        return $http({
            method: 'POST',
            headers:{'X-TenantID': 'freight_management'},
            data: path,
            url: 'http://localhost:8080/path'
        }).then(function (response) {
            console.log(response.data);
            return response.data;
        }, function (reason) {
            console.log(response.data);
            return reason;
        });
    }
    return {
        getAllPaths : getAllPaths,
        savePath : savePath
    };
}