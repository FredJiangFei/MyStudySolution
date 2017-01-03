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
var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.testCode = function () {
        function greeter(person) {
            console.log("Hello, " + person.firstName + " " + person.lastName);
        }
        var user = new Student("Jane", "M.", "User");
        greeter(user);
        var name = "Fred";
        var age = 37;
        var sentence = "Hello, my name is " + name + ".\n        I'll be " + (age + 1) + " years old next month.";
        console.log(sentence);
        //元组 Tuple
        var x;
        x = ['hello', 10];
        console.log(x[0].substr(1));
        //枚举
        var Color;
        (function (Color) {
            Color[Color["Red"] = 1] = "Red";
            Color[Color["Green"] = 2] = "Green";
            Color[Color["Blue"] = 3] = "Blue";
        })(Color || (Color = {}));
        ;
        var colorName = Color[2];
        console.log(colorName);
        //任意值
        var notSure = 4;
        notSure = "maybe a string instead";
        notSure = false;
        var list = [1, true, "free"];
        list[1] = 100;
        //空值
        function warnUser() {
            alert("This is my warning message");
        }
        var unusable = undefined;
        // 返回never的函数必须存在无法达到的终点
        //类型断言
        var someValue = "this is a string";
        var strLength = someValue.length;
        //解构
        var input = [1, 2];
        var f = input[0], second = input[1];
        console.log(f);
        console.log(second);
        var _a = [1, 2, 3, 4], first = _a[0], rest = _a.slice(1);
        console.log(first);
        console.log(rest);
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'my-home',
            template: '<h3>My Home</h3>' +
                '<button (click)="testCode()">Test</button>'
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
var Student = (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
//# sourceMappingURL=home.component.js.map