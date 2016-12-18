import { Component, Input, OnInit} from '@angular/core';
import { Person } from '../person/person';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { PersonService } from '../../person.service';

@Component({
    moduleId: module.id, // ??
    selector: 'person-detail-app',
    templateUrl:'person-detail.component.html'
})

export class PersonDetailComponent implements OnInit{
    constructor(
        private personService: PersonService,
        private route: ActivatedRoute,
        private location: Location
    ) { }

    @Input()
    person: Person;

    goBack(): void {
        this.location.back();
    }

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];

            this.personService.getPerson(id).subscribe(result => {
                this.person = result;
            }, error => console.log(error));
        });
    }
}
