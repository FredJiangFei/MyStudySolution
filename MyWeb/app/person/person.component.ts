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
    hideForm = true;

    onSubmit() {
        if (this.person.Id) {
            this.editPerson();
        } else {
            this.addNewPerson();
        }
        this.hideForm = true;
    }

    showAddForm() {
        this.hideForm = false;
    }

    showEditForm(p: Person) {
        this.person = p;
        this.hideForm = false;
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

    editPerson() {
        this.personService.updatePerson(this.person).subscribe(data => {
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
