var app = angular.module('myPratt', []);

app.controller('RegistrationController', ['$scope', function ($scope) {

    $scope.submitted = false;
    $scope.fillForm = function () {
        if ($scope.myQuote.$valid) {
            $scope.message = 'Welcome' + $scope.user.salesp;
        } else {
            alert('Please enter all required fields.');
        }
    };

}]);
