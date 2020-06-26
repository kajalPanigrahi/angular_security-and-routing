import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {map} from 'rxjs/operators';


@Injectable(
//   {
//   providedIn: 'root'
// }
)
export class AuthenticationService {

  constructor(private httpClient : HttpClient) { }

  validateUser(user){
    return this.httpClient.post('http://localhost:3000/auth/v1',user);
  }

  setAuthToken(token:string){
    localStorage.setItem('keeptoken',token);
  }

  getAuthToken(){
    return localStorage.getItem('keeptoken');
  }

  isUserValid(token){

     // ************* with promise ****************

    // return this.httpClient.post('http://localhost:3000/auth/v1/isAuthenticated',null,
    //   {
    //     headers : new HttpHeaders().set(
    //       'Authorization',`Bearer ${token}`
    //     )
    //   }
    // )
    // .pipe(map(response=>
    //   {
    //     console.log(response);
    //     return response['isAuthenticated']
    //   }))
    //.toPromise()


    // return this.httpClient.post('http://localhost:3000/auth/v1/isAuthenticated',null,
    //   {
    //     headers : new HttpHeaders().set(
    //       'Authorization',`Bearer ${token}`
    //     )
    //   }
    // )
    // .pipe(map(response=>
    //   {
    //     console.log(response);
    //     return response['isAuthenticated']
    //   }))



     // *********** with observable without mapped response **************


    return this.httpClient.post('http://localhost:3000/auth/v1/isAuthenticated',null,
    {
      headers : new HttpHeaders().set(
        'Authorization',`Bearer ${token}`
      )
    })    
  }

}
