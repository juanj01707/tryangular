import { Injectable } from '@angular/core';
import {environment } from 'src/environments/environment';
import {HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Register } from '../register/model/register';

const registerUrl = environment.register;

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }
  public register(client: Register): Observable<Object>{

    return this.http.post(`${registerUrl}`, client, { observe: 'response' });
  }

}
