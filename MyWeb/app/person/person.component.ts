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
    styleUrls: ['person.component.css'],
    providers: [PersonService]
})

export class PersonComponent implements OnInit {
    persons: Person[];
    notes = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
    person = new Person('Dr IQ', this.notes[0]);
    active = true;
    submitted = true;

    onSubmit() {
        this.addNewPerson();
        this.submitted = true;
    }

    showAddForm() {
        this.submitted = false;
    }

    constructor(private personService: PersonService) {}

    getPersons(): void {
        this.personService.getPersons().subscribe(result => {
                this.persons = result;
            }, error => console.log(error));
    }


    addNewPerson() {
        this.personService.addPerson(this.person).subscribe(data => {
            this.person = new Person(' ', ' ');
            this.active = false;
            setTimeout(() => this.active = true, 0);
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
