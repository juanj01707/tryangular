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
}
