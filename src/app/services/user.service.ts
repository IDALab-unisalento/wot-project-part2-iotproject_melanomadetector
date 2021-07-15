import { Injectable } from '@angular/core';
import {User} from '../../model/user';
import {Observable, of, Subscription} from 'rxjs';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {mdAPI} from "../confidental/awsAPI";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userLoginEndpoint = mdAPI.api + 'user/login';

  constructor(private http: HttpClient) {

  }

  userLogin(email:string,password:string): Observable<User>{
    return this.http.post<User>(this.userLoginEndpoint,{
      "email":email,
      "password":password,
      "type":"doctor"
    })
  }
  logout() :void {
    localStorage.setItem('isLoggedIn','false');
    localStorage.removeItem('token');
  }



  /*getApigUsers(): Observable<User[]> {
    const pathParams = {};
    const pathTemplate = '/users';
    const method = 'GET';
    const additionalParams = {};
    const body = {};

    const observable = new Observable<User[]>(observer => {
      this.apigClient.invokeApi(pathParams, pathTemplate, method, additionalParams, body)
        .then((result: any) => {
          observer.next(result.data);
          observer.complete();
      }).catch((error: any) => {
        console.log(error);
        }
      );
    });

    return observable;
  }
  */
}
