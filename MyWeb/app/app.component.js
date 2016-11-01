var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var core_1 = require('@angular/core');
var hero_1 = require('./hero');
var AppComponent = (function () {
    function AppComponent() {
        this.heroes = [
            new hero_1.Hero(1, 'Windstorm1'),
            new hero_1.Hero(13, 'Bombasto2'),
            new hero_1.Hero(15, 'Magneta3'),
            new hero_1.Hero(20, 'Tornado4')
        ];
        this.title = 'Tour of Heroes123';
        this.myHero = 'Windstorm 123';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <h1>{{title}}</h1>\n    <h2>My favorite hero is: {{myHero}}</h2>\n    <p>Heroes:</p>\n    <ul>\n      <li *ngFor=\"let hero of heroes\">\n        {{ hero.name }}\n      </li>\n    </ul>\n    "
        })
    ], AppComponent);
    return AppComponent;
})();
exports.AppComponent = AppComponent;
