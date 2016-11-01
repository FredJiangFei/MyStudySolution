import { Injectable } from '@angular/core';
import { Person } from './person';
import { Http, Response } from '@angular/http';
//import { Observable }     from 'rxjs/Observable';

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
    private heroesUrl = 'api/Persons'; 

    constructor(private http: Http) { }

    getHeroes(): Person[] {
        return HEROES;
    }

    //getHeroes(): Observable<Person[]> {
    //    return this.http.get(this.heroesUrl)
    //        .map(this.extractData)
    //        .catch(this.handleError);
    //}

    //private extractData(res: Response) {
    //    let body = res.json();
    //    return body.data || {};
    //}

    //private handleError(error: Response | any) {
    //    // In a real world app, we might use a remote logging infrastructure
    //    let errMsg: string;
    //    if (error instanceof Response) {
    //        const body = error.json() || '';
    //        const err = body.error || JSON.stringify(body);
    //        errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    //    } else {
    //        errMsg = error.message ? error.message : error.toString();
    //    }
    //    console.error(errMsg);
    //    return Observable.throw(errMsg);
    //}

}
