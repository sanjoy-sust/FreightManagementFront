aboutApp.factory("aboutService",function () {
    return{
        buildEmployee : function () {
            var employees = [
                {name: 'Sanjoy', gender: 'male', age: 30, salary: 2000},
                {name: 'Rakib', gender: 'male', age: 35, salary: 2000},
                {name: 'Mazhar', gender: 'male', age: 34, salary: 2000},
                {name: 'Salman', gender: 'male', age: 50, salary: 2000},
                {name: 'Rimon', gender: 'male', age: 41, salary: 2000},
                {name: 'Sajib', gender: 'male', age: 20, salary: 2000}
            ];
            return employees;
        }
    }
});