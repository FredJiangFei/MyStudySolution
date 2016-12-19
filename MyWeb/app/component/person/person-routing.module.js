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
var router_1 = require('@angular/router');
var person_component_1 = require('./person.component');
var person_detail_component_1 = require('./person-detail.component');
var routes = [
    // {
    //     path: 'persons',
    //     component: PersonComponent
    // }, 
    // {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // },
    { path: 'persons', component: person_component_1.PersonComponent },
    {
        path: 'detail/:id',
        component: person_detail_component_1.PersonDetailComponent
    }
];
var PersonRoutingModule = (function () {
    function PersonRoutingModule() {
    }
    PersonRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], PersonRoutingModule);
    return PersonRoutingModule;
}());
exports.PersonRoutingModule = PersonRoutingModule;
//# sourceMappingURL=person-routing.module.js.map