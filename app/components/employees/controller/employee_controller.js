var employeeApp = angular.module('routerApp.employee', [])
    .controller('employeeController', employeeController);
employeeController.$inject = ['$window', '$scope','employeeService'];

function employeeController($window, $scope,employeeService) {


    $scope.employees = employeeService.buildEmployee();

    $scope.salaryIcrement = function (employee) {
        employee.salary++;
    }

    $scope.salaryDecrement = function (employee) {
        employee.salary--;
    }

    $scope.rowLimit = 3;
    $scope.sortColumn = 'name';

    $scope.reverseSort = false;
    $scope.sortData = function (column) {
        $scope.reverseSort = ($scope.sortColumn == column) ? !$scope.reverseSort : false;
        $scope.sortColumn = column;
    }

    $scope.getSortClass = function (column) {
        if ($scope.sortColumn == column) {
            return $scope.reverseSort ? 'arrow-up' : 'arrow-down';
        }
        return '';
    }

    $scope.search = function (item) {
        if ($scope.searchName == undefined) return true;
        else if (item.name.toLowerCase().indexOf($scope.searchName.toLowerCase()) != -1) return true;
        return false;
    }
}