import { Injectable } from '@angular/core';
import { Person } from './person';
import { Http, Response, Headers } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise';

@Injectable()

export class PersonService {
    constructor(private http: Http) { }

    getPersons(): Observable<Person> {
        let url = 'api/Persons'; 
        return this.http.get(url).map((res: Response) => res.json());
    }

    addPerson(item: Person) {
        let url = 'api/Person'; 
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');

        this.http.post(url, item, { headers: headers });
    }
}
