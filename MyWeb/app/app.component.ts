import { Component } from '@angular/core';
import { Hero }   from './hero';

@Component({
    selector: 'my-app',
    template: `
    <h1>{{title}}</h1>
    <h2>My favorite hero is: {{myHero}}</h2>
    <p>Heroes:</p>
    <ul>
      <li *ngFor="let hero of heroes">
        {{ hero.name }}
      </li>
    </ul>
    `
})

export class AppComponent {
    heroes = [
        new Hero(1, 'Windstorm1'),
        new Hero(13, 'Bombasto2'),
        new Hero(15, 'Magneta3'),
        new Hero(20, 'Tornado4')
    ];

    title: string;
    myHero: string;

    constructor() {
        this.title = 'Tour of Heroes123';
        this.myHero = 'Windstorm 123';
    }
}
