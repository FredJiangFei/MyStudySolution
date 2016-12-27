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
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var person_service_1 = require('./person.service');
require('rxjs/add/operator/switchMap');
var PersonDetailComponent = (function () {
    function PersonDetailComponent(personService, route, location, router) {
        this.personService = personService;
        this.route = route;
        this.location = location;
        this.router = router;
    }
    Object.defineProperty(PersonDetailComponent.prototype, "routeAnimation", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PersonDetailComponent.prototype, "display", {
        get: function () {
            return 'block';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PersonDetailComponent.prototype, "position", {
        get: function () {
            return 'absolute';
        },
        enumerable: true,
        configurable: true
    });
    PersonDetailComponent.prototype.goBack = function () {
        var personId = this.person ? this.person.Id : null;
        this.router.navigate(['/persons', { id: personId, foo: 'foo' }]);
    };
    PersonDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.personService.getPerson(+params['id']); })
            .subscribe(function (result) {
            _this.person = result;
        }, function (error) { return console.log(error); });
    };
    PersonDetailComponent.prototype.canDeactivate = function () {
        console.log("123");
        return false;
        // if (!this.person || this.person.Name === this.editName) {
        //     return true;
        // }
        // return this.dialogService.confirm('Discard changes?');
    };
    __decorate([
        core_1.HostBinding('@routeAnimation'), 
        __metadata('design:type', Object)
    ], PersonDetailComponent.prototype, "routeAnimation", null);
    __decorate([
        core_1.HostBinding('style.display'), 
        __metadata('design:type', Object)
    ], PersonDetailComponent.prototype, "display", null);
    __decorate([
        core_1.HostBinding('style.position'), 
        __metadata('design:type', Object)
    ], PersonDetailComponent.prototype, "position", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', person_1.Person)
    ], PersonDetailComponent.prototype, "person", void 0);
    PersonDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'person-detail-app',
            templateUrl: 'person-detail.component.html',
            animations: [
                core_1.trigger('routeAnimation', [
                    core_1.state('*', core_1.style({ opacity: 1, transform: 'translateX(0)' })),
                    core_1.transition(':enter', [
                        core_1.style({ opacity: 0, transform: 'translateX(-100%)' }), core_1.animate('0.8s ease-in')
                    ]),
                    core_1.transition(':leave', [
                        core_1.style({ opacity: 0, transform: 'translateY(100%)' }),
                        core_1.animate('0.8s ease-out')
                    ])
                ])
            ]
        }), 
        __metadata('design:paramtypes', [person_service_1.PersonService, router_1.ActivatedRoute, common_1.Location, router_1.Router])
    ], PersonDetailComponent);
    return PersonDetailComponent;
}());
exports.PersonDetailComponent = PersonDetailComponent;
//# sourceMappingURL=person-detail.component.js.map