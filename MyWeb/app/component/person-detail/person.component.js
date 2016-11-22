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
        this.notes = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
        this.active = true;
    }
    PersonComponent.prototype.onSubmit = function () {
        if (this.person.Id) {
            this.editPerson();
        }
        else {
            this.addNewPerson();
        }
    };
    PersonComponent.prototype.showAddForm = function () {
        this.person = new person_1.Person('Dr IQ', this.notes[0]);
    };
    PersonComponent.prototype.showEditForm = function (p) {
        this.person = p;
    };
    PersonComponent.prototype.getPersons = function () {
        var _this = this;
        this.personService.getPersons().subscribe(function (result) {
            _this.persons = result;
        }, function (error) { return console.log(error); });
    };
    PersonComponent.prototype.addNewPerson = function () {
        var _this = this;
        this.personService.addPerson(this.person).subscribe(function (data) {
            _this.person = undefined;
            _this.active = false;
            setTimeout(function () { return _this.active = true; }, 0);
            _this.getPersons();
        });
    };
    PersonComponent.prototype.editPerson = function () {
        var _this = this;
        this.personService.updatePerson(this.person).subscribe(function (data) {
            _this.person = undefined;
            _this.active = false;
            setTimeout(function () { return _this.active = true; }, 0);
            _this.getPersons();
        });
    };
    PersonComponent.prototype.deletePerson = function (id) {
        var _this = this;
        this.personService.deletePerson(id).subscribe(function (data) {
            _this.getPersons();
        });
    };
    PersonComponent.prototype.ngOnInit = function () {
        this.getPersons();
    };
    PersonComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'person-app',
            templateUrl: 'person.component.html',
            styleUrls: ['person.component.css'],
            providers: [person_service_1.PersonService]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof person_service_1.PersonService !== 'undefined' && person_service_1.PersonService) === 'function' && _a) || Object])
    ], PersonComponent);
    return PersonComponent;
    var _a;
}());
exports.PersonComponent = PersonComponent;
//# sourceMappingURL=person.component.js.map