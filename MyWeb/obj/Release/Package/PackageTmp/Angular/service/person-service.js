MyWebApp.factory('PersonService', ['$http', function ($http) {
    var personService = {};

    personService.getPersons = function () {
        return $http.get('api/Persons');
    };
    return personService;
 
}]);  