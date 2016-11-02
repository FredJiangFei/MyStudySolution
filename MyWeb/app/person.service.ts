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
        console.log(item);
        console.log(item.Name);
      
        let url = 'api/Person'; 
        let body = JSON.stringify(item);   
        var headers = new Headers({ 'Content-Type': 'json' });
        this.http.post(url, body, { headers: headers });
    }
}
