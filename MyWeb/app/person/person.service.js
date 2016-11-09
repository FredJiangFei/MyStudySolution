"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/Rx');
require('rxjs/add/operator/map');
require('rxjs/add/operator/toPromise');
var PersonService = (function () {
    function PersonService(http) {
        this.http = http;
    }
    PersonService.prototype.getPersons = function () {
        var url = 'api/Persons';
        return this.http.get(url)
            .map(function (responce) { return responce.json(); })
            .catch(function (error) {
            console.log(error);
            return Observable_1.Observable.throw(error);
        });
    };
    PersonService.prototype.getPerson = function (id) {
        return this.getPersons()
            .then(function (persons) { return persons.find(function (p) { return p.Id === id; }); });
    };
    PersonService.prototype.addPerson = function (item) {
        var url = 'api/Person';
        var body = JSON.stringify(item);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(url, body, options);
    };
    PersonService.prototype.updatePerson = function (item) {
        var url = 'api/Person';
        var body = JSON.stringify(item);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.put(url, body, options);
    };
    PersonService.prototype.deletePerson = function (id) {
        var url = 'api/Person?id=' + id;
        return this.http.delete(url);
    };
    PersonService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], PersonService);
    return PersonService;
}());
exports.PersonService = PersonService;
//# sourceMappingURL=person.service.js.map