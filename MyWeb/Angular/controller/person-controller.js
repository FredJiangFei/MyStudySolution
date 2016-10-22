MyWebApp.controller('PersonController', function ($scope, PersonService) {
    $scope.message = "Infrgistics";

    $scope.init= function() {
        $scope.getPersons();
    }

    $scope.getPersons = function() {
        PersonService.getPersons().success(function(result) {
            $scope.persons = result;
        }).error(function(error) {
            $scope.status = 'Unable to load customer data: ' + error.message;
        });
    }

});