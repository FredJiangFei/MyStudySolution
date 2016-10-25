MyWebApp.controller('PersonController', function ($scope, PersonService) {
    $scope.init= function() {
        $scope.getPersons();
    }



    $scope.getPersons = function () {
        $scope.loadingData = true;
        PersonService.getPersons().success(function(result) {
            $scope.persons = result;
            $scope.loadingData = false;
        }).error(function (error) {
            $scope.loadingData = false;
            $scope.status = 'Unable to load customer data: ' + error.message;
        });
    }

    $scope.showCreateModal = function () {

        $("#createPersonModal").modal("show");
    }
});