import { Component } from '@angular/core';

@Component({
    selector: 'my-dashboard',
    template: '<h3>My Dashboard</h3>' +
        '<button (click)="testCode()">Test</button>'
})
export class DashboardComponent {
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


        let x: [string, number];
        x = ['hello', 10];
        console.log(x[0].substr(1));
        
        enum Color {Red = 1, Green, Blue};
        let colorName: string = Color[2];
        console.log(colorName);
        
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
