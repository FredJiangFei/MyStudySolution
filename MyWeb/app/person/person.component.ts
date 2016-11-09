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
    styleUrls: ['person.component.css']
    //providers: [PersonService]
})

export class PersonComponent implements OnInit {
    persons: Person[];
    notes = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
    person: Person;
    active = true;

    constructor(private personService: PersonService) { }

    onSubmit() {
        if (this.person.Id) {
            this.editPerson();
        } else {
            this.addNewPerson();
        }
    }

    showAddForm() {
        this.person = new Person('Dr IQ', this.notes[0]);
    }

    showEditForm(p: Person) {
        this.person = p;
    }

    getPersons(): void {
        this.personService.getPersons().subscribe(result => {
                this.persons = result;
            }, error => console.log(error));
    }

    addNewPerson() {
        this.personService.addPerson(this.person).subscribe(data => {
            this.person = undefined;
            this.active = false;
            setTimeout(() => this.active = true, 0);
            this.getPersons();
        }); 
    }

    editPerson() {
        this.personService.updatePerson(this.person).subscribe(data => {
            this.person = undefined;
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
