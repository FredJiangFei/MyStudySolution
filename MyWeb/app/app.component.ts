import { Component, OnInit } from '@angular/core';
import { Person } from './person';
import { PersonService } from './person.service';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
    selector: 'my-app',
    template: `
    <h1>{{title}}</h1>
    <h2>My Persons</h2>
    <ul class="heroes">
      <li *ngFor="let p of persons">
        <span class="badge">{{p.Id}}</span> {{p.Name}}
      </li>
    </ul>
  `
  , providers: [PersonService]
})

export class AppComponent implements OnInit {
    title = 'Tour of Persons';
    persons: Person[];

    constructor(private personService: PersonService) {}

    getPersons(): void {
        this.personService.getPersons().subscribe((persons:Person[]) => {
            this.persons = persons;
            }); 

        //this.persons =  this.personService.getPersons();
    }

    ngOnInit(): void {
        this.getPersons();
    }
}
