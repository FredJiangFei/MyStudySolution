import { Injectable } from '@angular/core';
import { Person } from './person';
import { Headers, Http } from '@angular/http';

const HEROES: Person[] = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 20, name: 'Tornado' }
];

@Injectable()

export class PersonService {
    private heroesUrl = 'app/Persons'; 

    constructor(private http: Http) { }

    getHeroes(): Person[] {
        return HEROES;
    }
}
