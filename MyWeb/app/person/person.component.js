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
var person_1 = require('./person');
var person_service_1 = require('./person.service');
require('rxjs/Rx');
var PersonComponent = (function () {
    function PersonComponent(personService) {
        this.personService = personService;
    }
    PersonComponent.prototype.getPersons = function () {
        var _this = this;
        this.personService.getPersons()
            .subscribe(function (result) {
            _this.persons = result;
        }, function (error) { return console.log(error); });
    };
    PersonComponent.prototype.addNewPerson = function () {
        var _this = this;
        var p = new person_1.Person("worldff");
        this.personService.addPerson(p).subscribe(function (data) {
            console.log("add success");
            _this.getPersons();
        });
    };
    PersonComponent.prototype.deletePerson = function (id) {
        var _this = this;
        this.personService.deletePerson(id).subscribe(function (data) {
            console.log("delete success");
            _this.getPersons();
        });
    };
    PersonComponent.prototype.ngOnInit = function () {
        this.getPersons();
    };
    PersonComponent = __decorate([
        core_1.Component({
            //moduleId: module.id,
            selector: 'person-app',
            //templateUrl:'person.component.html',
            //styleUrls: ['person.component.css'],
            template: "\n    <h1>{{title}}</h1>\n    <h2>My Persons</h2>\n   \n    <button (click)=\"addNewPerson()\">addNewPerson</button>\n    <ul class=\"heroes\">\n      <li *ngFor=\"let p of persons\">\n        <span class=\"badge\">{{p.Id}}</span> {{p.Name}}\n        <a href=\"javascript:void(0)\" (click)=\"deletePerson(p.Id)\">deletePerson</a>\n      </li>\n    </ul>\n  ",
            providers: [person_service_1.PersonService]
        }), 
        __metadata('design:paramtypes', [person_service_1.PersonService])
    ], PersonComponent);
    return PersonComponent;
}());
exports.PersonComponent = PersonComponent;
//# sourceMappingURL=person.component.js.map