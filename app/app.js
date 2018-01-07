var routerApp = angular.module('routerApp',
    [
        'ui.router',
        'routerApp.scotch',
        'routerApp.employee',
        'routerApp.github',
        'routerApp.path',
        'routerApp.shell'
    ]);

routerApp.config(function ($stateProvider, $urlRouterProvider, $urlMatcherFactoryProvider) {

    $urlRouterProvider.otherwise('/home');
    $urlMatcherFactoryProvider.caseInsensitive(true);
    $stateProvider

        .state('home', {
            url: '/home',
            templateUrl: 'app/components/home/templates/partial_home.html'
        })

        .state('home.list', {
            url: '/list',
            templateUrl: 'app/components/home/templates/partial_home_list.html',
            controller: 'homeController'
        })
        .state('home.paragraph', {
            url: '/paragraph',
            template: 'I could sure use a drink right now.'
        })

        .state('about', {
            url: '/about',
            views: {
                '': {templateUrl: 'app/components/about/templates/partial_about.html'},
                'columnOne@about': {template: 'Look I am a column!'},
                'columnTwo@about': {
                    templateUrl: 'app/shared/templates/table_data.html',
                    controller: 'homeController'
                }
            }

        })

        .state('employee', {
            url: '/employee',
            templateUrl: 'app/components/employees/templates/partial_employee_list.html',
            controller: 'employeeController'
        })

        .state('github', {
            url: '/github',
            templateUrl: 'app/components/github/templates/github_view.html',
            controller: 'githubController'
        })
        .state('path', {
            url: '/path',
            templateUrl: 'app/components/frieght_management/templates/path_view.html',
            controller: 'pathController'
        })
    ;
});