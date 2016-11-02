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
require('rxjs/Rx');
var AppComponent = (function () {
    //constructor(private personService: PersonService) {}
    function AppComponent(http) {
        this.http = http;
        this.title = 'Tour of Persons 123 8';
        this.url = 'api/Persons';
    }
    AppComponent.prototype.getPersons = function () {
        var _this = this;
        //this.personService.getPersons().then(heroes => this.persons = heroes);
        //this.persons = this.personService.getPersons();
        this.http.get(this.url)
            .map(function (response) { return response.json(); })
            .subscribe(function (res) {
            _this.persons = res;
        }, function (err) { return console.log(err); }, function () { return console.log("Done"); });
    };
    AppComponent.prototype.ngOnInit = function () {
        this.getPersons();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <h1>{{title}}</h1>\n    <h2>My Persons</h2>\n    <ul class=\"heroes\">\n      <li *ngFor=\"let p of persons\">\n        <span class=\"badge\">{{p.Id}}</span> {{p.Name}}\n      </li>\n    </ul>\n  "
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map