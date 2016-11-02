import { Injectable } from '@angular/core';
import { Person } from './person';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class PersonService {
    private url = 'api/Persons'; 

    constructor(private http: Http) { }

    getPersons(): Person[] {
        return this.http.get(this.url)
            .toPromise()
            .then(response => response.json().data);

        //return this.http.get(this.url)
        //       .map(response => response.json());
    }

    //private handleError(error: any): Promise<any> {
    //    console.error('An error occurred', error); // for demo purposes only
    //    return Promise.reject(error.message || error);
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
