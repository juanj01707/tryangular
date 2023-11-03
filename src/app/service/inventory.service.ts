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
  public getInventory(documentType: string, documentNumber: string): Observable<Object> {

      let params = {
          "documentType": documentType,
          "documentNumber": documentNumber,
      };

      return this.http.get(`${inventorUrl}`, { params, observe: 'response' });
  }

  
  public saveInventory(client: Inventory): Observable<Object> {

    // para usar el token generado en login y poder consumir la api
    //hay que mandar el header con el getCookies
    //busque en google http client add header angular
    /*
     let headers = new HttpHeaders();
     headers = headers.set('Content-Type', aqui poner el getCokkie; charset=utf-8');

    */
    return this.http.post(`${inventorUrl}`, client, { observe: 'response' });

}

}
