import { Component } from '@angular/core';

@Component({
    moduleId: module.id, // ??
    selector: 'my-app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})

export class AppComponent {
    // constructor (private wikipediaService: WikipediaService) { }

    title = 'Tour of Persons';
    // items: Observable<string[]>;
    //
    // search (term: string) {
    //     this.items = this.wikipediaService.search(term);
    // }
}
