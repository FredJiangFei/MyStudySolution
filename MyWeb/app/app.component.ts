import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
    moduleId: module.id, // ??
    selector: 'my-app',
    templateUrl: 'app.component.html',
    //template: `
    //<h1>{{title}}</h1>
    //<nav>
    //    <a routerLink="/dashboard">Dashboard</a>
    //    <a routerLink="/persons">Person</a>
    //</nav>
    //<router-outlet></router-outlet>`,
    //template: `<h1>ddddd</h1>`,
})

export class AppComponent {
    title = 'Tour of Persons';
   
}
