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
var AppComponent = (function () {
    function AppComponent(personService) {
        this.personService = personService;
        this.title = 'Tour of Person';
        this.clickMessage = '';
    }
    AppComponent.prototype.getPersons = function () {
        var _this = this;
        this.personService.getPersons().subscribe(function (persons) {
            _this.persons = persons;
        });
    };
    AppComponent.prototype.onClickMe = function () {
        console.log("start");
        var p = new person_1.Person("world");
        this.personService.addPerson(p);
    };
    AppComponent.prototype.ngOnInit = function () {
        this.getPersons();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <h1>{{title}}</h1>\n    <h2>My Persons</h2>\n    <button (click)=\"onClickMe()\">\u65B0\u589E\u90E8\u95E8</button>\n    <ul class=\"heroes\">\n      <li *ngFor=\"let p of persons\">\n        <span class=\"badge\">{{p.Id}}</span> {{p.Name}}\n      </li>\n    </ul>\n  ",
            providers: [person_service_1.PersonService]
        }), 
        __metadata('design:paramtypes', [person_service_1.PersonService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map