import { Injectable } from '@angular/core';
import { Person } from './person';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise';

@Injectable()

export class PersonService {
    constructor(private http: Http) { }
    headers = new Headers({ 'Content-Type': 'application/json' });
    options = new RequestOptions({ headers: this.headers });

    getPersons(): Observable<Person[]>{
        let url = 'api/Persons';
        return this.http.get(url)
                    .map(this.extractData)
                    .catch(this.handleError);
    }

     getPerson(id: number):Observable<Person> {
         let url = 'api/Person?id='+id;
         return this.http.get(url)
                     .map(this.extractData)
                     .catch(this.handleError);
     }

    addPerson(item: Person): Observable<Response> {
        let url = 'api/Person'; 
        return this.http.post(url, JSON.stringify(item), this.options);
    }

    updatePerson(item: Person): Observable<Response> {
        let url = 'api/Person';
        return this.http.put(url, JSON.stringify(item), this.options);
    }

    deletePerson(id: string): Observable<Response> {
        let url = 'api/Person?id='+id;
        return this.http.delete(url);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || { };
    }

    private handleError (error: Response | any) {
        console.log(error);
        return Observable.throw(error);
    }
}
