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
var common_1 = require('@angular/common');
//import { BrowserModule } from '@angular/platform-browser';
var forms_1 = require('@angular/forms');
var person_component_1 = require('./person.component');
var person_service_1 = require('../../person.service');
var highlight_directive_1 = require('./highlight.directive');
var awesome_pipe_1 = require('./awesome.pipe');
var person_detail_component_1 = require('./person-detail.component');
var person_routing_module_1 = require('./person-routing.module');
var PersonModule = (function () {
    function PersonModule() {
    }
    PersonModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, forms_1.FormsModule, person_routing_module_1.PersonRoutingModule],
            declarations: [person_component_1.PersonComponent, highlight_directive_1.HighlightDirective, awesome_pipe_1.AwesomePipe, person_detail_component_1.PersonDetailComponent],
            exports: [person_component_1.PersonComponent],
            providers: [person_service_1.PersonService]
        }), 
        __metadata('design:paramtypes', [])
    ], PersonModule);
    return PersonModule;
}());
exports.PersonModule = PersonModule;
//# sourceMappingURL=person.module.js.map