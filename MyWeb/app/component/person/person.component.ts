import { Component, OnInit,trigger,
        state,
        style,
        transition,
        animate } from '@angular/core';
import { Person } from './person';
import { PersonService } from './person.service';
import 'rxjs/Rx';

import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';


@Component({
    moduleId: module.id, // ??
    selector: 'person-app',
    templateUrl:'person.component.html',
    styleUrls: ['person.component.css']
})

export class PersonComponent implements OnInit {
    persons: Observable<Person>;
    notes = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
    person: Person;
    active = true;

    constructor(private personService: PersonService,
                private router: Router,
                private route: ActivatedRoute) { }

    onSelect(person: Person) {
        this.router.navigate(['/detail', person.Id]);
    }

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
        this.persons =this.route.params.switchMap((params:Params)=>{
                this.selectedId = +params['id'];
                return this.personService.getPersons();
        })

        // this.personService.getPersons().subscribe(result => {
        //         this.persons = result;
        //     }, error => console.log(error));
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

    private selectedId: number;
    isSelected(person:Person) { return person.Id === this.selectedId; }

    ngOnInit(): void {
        // this.persons =this.route.params.switchMap((params:Params)=>{
        //         this.selectedId = +params['id'];
        //         return this.personService.getPersons();
        // })

        this.getPersons();
    }
}
