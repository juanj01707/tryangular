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
  public autenthicate(correo: string, password: string): Observable<Object> {

    let params = {
        "documentType": correo,
        "documentNumber": password,
    };

    return this.http.get(`${loginUrl}`, { params, observe: 'response' });
}

}
