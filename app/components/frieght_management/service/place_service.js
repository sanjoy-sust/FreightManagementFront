/**
 * Created by Lenovo on 06/01/2018.
 */
placeApp.factory('placeService', placeService);
placeService.$inject = ['$http', '$q', '$timeout'];

function placeService($http, $q, $timeout) {

    function getAllPlaces() {

        return $http.get('http://localhost:8080/place').then(function (response) {
            console.log(response.data);
            return response.data;
        }, function (reason) {
            return null;
        });
    }
    return {
        getAllPlaces : getAllPlaces
    };
}