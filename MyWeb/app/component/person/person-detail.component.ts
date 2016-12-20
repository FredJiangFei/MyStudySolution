import { Component, Input, OnInit, HostBinding,
         trigger, transition, animate,
         style, state } from '@angular/core';
import { Person } from '../person/person';
import { Router,ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { PersonService } from '../../person.service';
import 'rxjs/add/operator/switchMap';

//import { DialogService }        from './dialog.service';


@Component({
    moduleId: module.id, // ??
    selector: 'person-detail-app',
    templateUrl:'person-detail.component.html',
    animations: [
    trigger('routeAnimation', [
      state('*',style({opacity: 1,transform: 'translateX(0)'})),
      transition(':enter', [
        style({opacity: 0,transform: 'translateX(-100%)'}),animate('0.8s ease-in')
        //animate('0.8s ease-in',style({opacity: 0,transform: 'translateX(-100%)'}))
      ]),
      transition(':leave', [
        style({opacity: 0,transform: 'translateY(100%)'}),
        animate('0.8s ease-out')
      ])
    ])
  ]
})

export class PersonDetailComponent implements OnInit{
    @HostBinding('@routeAnimation') get routeAnimation() {
        return true;
    }

    @HostBinding('style.display') get display() {
        return 'block';
    }

    @HostBinding('style.position') get position() {
        return 'absolute';
    }

    constructor(
        private personService: PersonService,
        private route: ActivatedRoute,
        private location: Location,
        private router: Router
        //private dialogService: DialogService
    ) { }

    @Input()
    person: Person;

    goBack(): void {
        let personId = this.person ? this.person.Id:null;
        this.router.navigate(['/persons',{id:personId,foo:'foo'}]);
    }

    ngOnInit(): void {
        this.route.params
        .switchMap((params: Params) => this.personService.getPerson(+params['id']))
        .subscribe(result => {
               this.person = result;
           }, error => console.log(error))
    }

    canDeactivate(): Promise<boolean> | boolean {
        console.log("123");
        return false;
        
        // if (!this.person || this.person.Name === this.editName) {
        //     return true;
        // }

       // return this.dialogService.confirm('Discard changes?');
    }
}
