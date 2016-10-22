MyWebApp.factory('PersonService', ['$http', function ($http) {
    var personService = {};

    personService.getPersons = function () {
        return $http.get('/Person/GetPesrons');
    };
    return personService;
 
}]);  