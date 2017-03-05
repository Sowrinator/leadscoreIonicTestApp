import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import {Observable} from 'rxjs/Rx'
import 'rxjs/add/operator/map';

/*
  Generated class for the PeopleService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class PeopleService {

   currentUser;

  constructor(public http: Http) {
    console.log('Hello PeopleService Provider');
  }
  
  
  login(loginDetails : LoginDetails) : Observable<Response> {
    console.log("loginDetails Received: " + loginDetails.username + "/" + loginDetails.password);
    return this.http.post('https://internal-api-staging-lb.interact.io/v2/login', loginDetails);
  }
  
  
  updateCurrentUser(user) {
    this.currentUser = user;
  }
  
  
  getContacts() : Observable<Response> {
    // Currently only loads from 0 -> 100 contacts
    // console.log("Auth Token: " + this.currentUser.token.authToken);
    var options = new RequestOptions({
        headers: new Headers({'authToken': this.currentUser.token.authToken})
    });
    return this.http.get('https://internal-api-staging-lb.interact.io/v2/contacts', options);
  }
  
  logout() : Observable<Response> {
    return this.http.post('https://internal-api-staging-lb.interact.io/v2/logout', {'authToken': this.currentUser.token.authToken});
  }
  
}

export interface LoginDetails {
  username: String;
  password: String;
}
