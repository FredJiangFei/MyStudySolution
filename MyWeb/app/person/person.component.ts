import { Component, OnInit } from '@angular/core';
import { Person } from './person';
import { PersonService } from './person.service';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
    moduleId: module.id, // ??
    selector: 'person-app',
    templateUrl:'person.component.html',
    //styleUrls: ['person.component.css'],
    providers: [PersonService]
})

export class PersonComponent implements OnInit {
    persons: Person[];

    constructor(private personService: PersonService) {}

    getPersons(): void {
        this.personService.getPersons().subscribe(result => {
                this.persons = result;
            }, error => console.log(error));
    }

    addNewPerson(name:string) {
        let p = new Person(name);
        this.personService.addPerson(p).subscribe(data => {
            this.getPersons();
        }); 
    }

    deletePerson(id:string) {
        this.personService.deletePerson(id).subscribe(data => {
            this.getPersons();
        });
    }

    ngOnInit(): void {
        this.getPersons();
    }
}
