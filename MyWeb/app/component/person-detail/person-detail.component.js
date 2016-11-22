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
var person_1 = require('../person/person');
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var person_service_1 = require('.../service/person.service');
var PersonDetailComponent = (function () {
    function PersonDetailComponent(personService, route, location) {
        this.personService = personService;
        this.route = route;
        this.location = location;
    }
    PersonDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    PersonDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            _this.personService.getPerson(id).subscribe(function (result) {
                _this.person = result;
            }, function (error) { return console.log(error); });
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', person_1.Person)
    ], PersonDetailComponent.prototype, "person", void 0);
    PersonDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'person-detail-app',
            templateUrl: 'person-detail.component.html'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof person_service_1.PersonService !== 'undefined' && person_service_1.PersonService) === 'function' && _a) || Object, router_1.ActivatedRoute, common_1.Location])
    ], PersonDetailComponent);
    return PersonDetailComponent;
    var _a;
}());
exports.PersonDetailComponent = PersonDetailComponent;
//# sourceMappingURL=person-detail.component.js.map