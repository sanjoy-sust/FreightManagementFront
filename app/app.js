var routerApp = angular.module('routerApp',
    [
        'ui.router',
        'routerApp.home',
        'routerApp.about',
        'routerApp.employee',
        'routerApp.github',
        'routerApp.path',
        'routerApp.shell',
        'routerApp.place'
    ]);

routerApp.config(function ($stateProvider, $urlRouterProvider, $urlMatcherFactoryProvider) {

    $urlRouterProvider.otherwise('/home');
    $urlMatcherFactoryProvider.caseInsensitive(true);
    $stateProvider

        .state('home', {
            url: '/home',
            controller: 'homeController',
            templateUrl: 'app/components/home/templates/partial_home.html'
        })

        /*
            .state('about', {
                url: '/about',
                controller: 'aboutController',
                templateUrl: 'app/components/about/templates/about_view.html'

            })
      .state('employee', {
                url: '/employee',
                templateUrl: 'app/components/employees/templates/partial_employee_list.html',
                controller: 'employeeController'
            })*/

        .state('github', {
            url: '/github',
            templateUrl: 'app/components/github/templates/github_project_view.html',
            controller: 'githubController'
        })
        .state('github_user', {
            url: '/github_user',
            templateUrl: 'app/components/github/templates/github_user_view.html',
            controller: 'githubController'
        })
        .state('place', {
            url: '/place',
            templateUrl: 'app/components/frieght_management/templates/place_view.html',
            controller: 'placeController'
        })
        .state('path', {
            url: '/path',
            templateUrl: 'app/components/frieght_management/templates/path_view.html',
            controller: 'pathController'
        })
    ;
});