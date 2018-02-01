homeApp.factory('homeService', homeService);
homeService.$inject = ['$http', '$q', '$timeout'];

function homeService($http, $q, $timeout) {

    function getFollowersOfTweeter() {
        return $http.jsonp('https://syndication.twitter.com/timeline/profile?callback=true&dnt=false&screen_name=sanjoykdeb')
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