import { Component } from '@angular/core';

@Component({
    selector: 'my-home',
    template: '<h3>My Home</h3>' +
        '<button (click)="testCode()">Test</button>'
})
export class HomeComponent {
    testCode() {
        function greeter(person: Person) {
            console.log("Hello, " + person.firstName + " " + person.lastName);
        }

        let user = new Student("Jane", "M.", "User");
        greeter(user); 

        let name ="Fred";
        let age =37;
        let sentence =`Hello, my name is ${ name }.
        I'll be ${ age + 1 } years old next month.`;

        console.log(sentence);

        //元组 Tuple
        let x: [string, number];
        x = ['hello', 10];
        console.log(x[0].substr(1));
        
        //枚举
        enum Color {Red = 1, Green, Blue};
        let colorName: string = Color[2];
        console.log(colorName);
        
        //任意值
        let notSure :any =4;
        notSure = "maybe a string instead";
        notSure=false;

        let list: any[] = [1, true, "free"];
        list[1] = 100;

        //空值
        function warnUser():void  {
            alert("This is my warning message");
        }

        let unusable : void = undefined;

       // 返回never的函数必须存在无法达到的终点

       //类型断言
       let someValue :any ="this is a string";
       let strLength:number =(<string>someValue).length;

        //解构
        let input = [1, 2];
        let [f, second] = input;
        console.log(f); 
        console.log(second); 

        let [first, ...rest] = [1, 2, 3, 4];
        console.log(first); 
        console.log(rest); 

        
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

class Student {
    fullName: string;
    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}
