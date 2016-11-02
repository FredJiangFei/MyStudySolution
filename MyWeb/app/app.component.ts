import { Component, OnInit } from '@angular/core';
import { Person } from './person';
import { PersonService } from './person.service';
//import './rxjs-operators';


@Component({
    selector: 'my-app',
    template: `
    <h1>{{title}}</h1>
    <h2>My Heroes</h2>
    <ul class="heroes">
      <li *ngFor="let hero of heroes">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
  `,
    providers: [PersonService]
})

export class AppComponent implements OnInit {
    title = 'Tour of Heroes';
    heroes: Person[];
    constructor(private personService: PersonService) { }

    getHeroes(): void {
        //this.personService.getHeroes()
        //    .subscribe(
        //    heroes => this.heroes = heroes,
        //    error => this.errorMessage = <any>error);

        this.heroes = this.personService.getHeroes();
    }

    ngOnInit(): void {
        this.getHeroes();
    }
}
