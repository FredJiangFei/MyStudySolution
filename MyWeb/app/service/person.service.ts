import { Injectable } from '@angular/core';
import { Person } from '../person/person';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise';

@Injectable()

export class PersonService {
    constructor(private http: Http) { }

    getPersons(){
        let url = 'api/Persons';
        return this.http.get(url)
            .map(responce => <Person[]>responce.json())
            .catch(error => {
                console.log(error);
                return Observable.throw(error);
            });
    }

    getPerson(id: number) {
        let url = 'api/Person?id='+id;
        return this.http.get(url)
            .map(responce => <Person>responce.json())
            .catch(error => {
                console.log(error);
                return Observable.throw(error);
            });
    }

    addPerson(item: Person): Observable<Response> {
        let url = 'api/Person'; 
        let body = JSON.stringify(item);   
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(url, body, options);
    }

    updatePerson(item: Person): Observable<Response> {
        let url = 'api/Person';
        let body = JSON.stringify(item);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.put(url, body, options);
    }

    deletePerson(id: string): Observable<Response> {
        let url = 'api/Person?id='+id;
        return this.http.delete(url);
    }
}
