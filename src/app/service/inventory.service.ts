import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Inventory } from '../inventory/model/inventory';
import { getCookie } from '../cookie/cookie-utils';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
const inventoryUrl = environment.inventory;
 
@Injectable({
  providedIn: 'root'
})

export class InventoryService {

  constructor(private http: HttpClient) { }
  private getHeaders(): HttpHeaders {
  const token = getCookie('token');
  console.log('Token:', token);

  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
    'Accept': '*/*'
  });

  return headers;
  }

  public getInventory(): Observable<Object> {
    const headers = this.getHeaders();
    return this.http.get<Inventory[]>(inventoryUrl, { headers });
  }

  
  public saveInventory(client: Inventory): Observable<Object> {

    return this.http.post(`${inventoryUrl}`, client, { observe: 'response' });
}



}
