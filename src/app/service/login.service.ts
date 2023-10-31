import { Injectable } from '@angular/core';
import {environment } from 'src/environments/environment';
import {HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from '../login/model/login';

const loginUrl = environment.login;

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  public authenticate(loginmodel: Login): Observable<Object> {


    return this.http.post(`${loginUrl}`, loginmodel,{ observe: 'response' });
}

}
