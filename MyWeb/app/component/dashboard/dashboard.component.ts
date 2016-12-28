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
        //var user = "Jane User";
        greeter(user); 
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
