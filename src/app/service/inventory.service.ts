import { Injectable } from '@angular/core';
import {environment } from 'src/environments/environment';
import {HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Inventory } from '../inventory/model/inventory';

const inventorUrl = environment.inventory;
 
@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor(private http: HttpClient) { }
  public getClient(documentType: string, documentNumber: string): Observable<Object> {

      let params = {
          "documentType": documentType,
          "documentNumber": documentNumber,
      };

      return this.http.get(`${inventorUrl}`, { params, observe: 'response' });
  }

  
  public saveClient(client: Inventory): Observable<Object> {

    return this.http.post(`${inventorUrl}`, client, { observe: 'response' });

}
/*
public updateClient(clientId: string, client:Inventory): Observable<Object> {

    let params = {
        "clientId": clientId
    }
    return this.http.put(`${inventorUrl}`, client , { params, observe: 'response' });

}

public deleteClient(clientId: string): Observable<any> {

    let params = {
        "clientId": clientId
    }

    return this.http.delete(`${inventorUrl}`, { params, observe: 'response' });

}
*/

}
