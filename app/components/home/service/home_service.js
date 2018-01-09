homeApp.factory('homeService', homeService);
homeService.$inject = ['$http', '$q', '$timeout'];

function homeService($http, $q, $timeout) {

    function getFollowersOfTweeter() {
        return $http.jsonp('http://cdn.syndication.twimg.com/widgets/followbutton/info.json?screen_names=sanjoykdeb')
            .then(function (response) {
                console.log(response);
                return response;
            }, function (reason) {
                return null;
            });
    }
    return {
        getFollowersOfTweeter : getFollowersOfTweeter
    };
}