import { Injectable } from '@angular/core';
import {User} from '../models/user';
import {Observable, of, Subscription} from 'rxjs';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[] = [];
  disableEndpoint = 'http://localhost:8080/user/disable/'
  enableEndpoint = 'http://localhost:8080/user/enable/'
  usersEndpoint = 'http://localhost:8080/user/review';
  addUserEndpoint = 'http://localhost:8080/user/save';
  userByIdEndpoint = 'http://localhost:8080/user/get';
  userLoginEndpoint = 'http://localhost:8080/user/login';

  /*apigClientFactory: any;
  config: any;
  apigClient: any;
*/
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:8080/'
    })
  };

  constructor(private http: HttpClient) {

   /* this.apigClientFactory = require('aws-api-gateway-client').default;
    this.config = {invokeUrl: 'https://0tunubjk5e.execute-api.us-east-1.amazonaws.com/DEV'};
    this.apigClient = this.apigClientFactory.newClient(this.config);
  */
  }

  addUser(user: User): void {
    this.users.unshift(user);
  }

  getReview(): Observable<User[]> {
    return this.http.get<User[]>(this.usersEndpoint);
  }

  enable(type:string,id:number): void{
     this.http.get(this.enableEndpoint+type+"_"+id).toPromise().then();
  }
  disable(type:string,id:number): void{
    this.http.get(this.disableEndpoint+type+"_"+id).toPromise().then();
  }
  userLogin(email:string,password:string): Observable<User>{
    return this.http.post<User>(this.userLoginEndpoint,{
      "email":email,
      "password":password
    })
  }
  logout() :void {
    localStorage.setItem('isLoggedIn','false');
    localStorage.removeItem('token');
  }

  getSpringUserById(id: string): Observable<User> {
    // return this.http.get<User[]>(this.userByIdEndpoint + '/' + id);
    return this.http.get<User>(`${this.userByIdEndpoint}${id}`);
  }

  addSpringUser(user: User): Observable<User> {
    return this.http.post<User>(this.addUserEndpoint, user, this.httpOptions);
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
