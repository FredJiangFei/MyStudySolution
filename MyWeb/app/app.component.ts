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
  //, providers: [PersonService]
})

export class AppComponent implements OnInit {
    title = 'Tour of Persons 123 8';
    persons: Person[];
    private url = 'api/Persons'; 

    //constructor(private personService: PersonService) {}
    constructor(private http: Http) {}

    getPersons(): void {
        //this.personService.getPersons().then(heroes => this.persons = heroes);
        //this.persons = this.personService.getPersons();
        this.http.get(this.url)
            .map(response => response.json())
            .subscribe((res) => {
                this.persons = res;
            },
            (err) => console.log(err),
            () => console.log("Done")
        );
    }

    ngOnInit(): void {
        this.getPersons();
    }
}
