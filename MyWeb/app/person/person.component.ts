import { Component, OnInit } from '@angular/core';
import { Person } from './person';
import { PersonService } from './person.service';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
    //moduleId: module.id,
    selector: 'person-app',
    //templateUrl:'person.component.html',
    //styleUrls: ['person.component.css'],
    template: `
    <h1>{{title}}</h1>
    <h2>My Persons</h2>
   
    <button (click)="addNewPerson()">addNewPerson</button>
    <ul class="heroes">
      <li *ngFor="let p of persons">
        <span class="badge">{{p.Id}}</span> {{p.Name}}
        <a href="javascript:void(0)" (click)="deletePerson(p.Id)">deletePerson</a>
      </li>
    </ul>
  `,
    providers: [PersonService]
})

export class PersonComponent implements OnInit {
    persons:  Person[];

    constructor(private personService: PersonService) {}

    getPersons(): void {
        this.personService.getPersons()
            .subscribe(result => {
                this.persons = result;
            }, error => console.log(error));
    }

    addNewPerson() {
        let p = new Person("worldff");
        this.personService.addPerson(p).subscribe(data => {
            console.log("add success");
            this.getPersons();
        }); 
    }

    deletePerson(id:string) {
        this.personService.deletePerson(id).subscribe(data => {
            console.log("delete success");
            this.getPersons();
        });
    }

    ngOnInit(): void {
        this.getPersons();
    }
}
