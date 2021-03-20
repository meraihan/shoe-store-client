import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/auth-service/';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class AuthServiceService {

  constructor(private http: HttpClient) { }


  register(signUpData): Observable<any>{
    const parsedUrl= new URL(window.location.href);
    return this.http.post(AUTH_API + 'signup',{
      firstName: signUpData.firstName,
      lastName: signUpData.lastName,
      email: signUpData.email,
      password: signUpData.password
    }, httpOptions);
  }



  login(credentials): Observable<any> {
    return this.http.post(AUTH_API + 'login',{
      email: credentials.email,
      password: credentials.password
    }, httpOptions);
  }


}
