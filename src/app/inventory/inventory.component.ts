import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { InventoryService } from '../service/inventory.service';
import { Inventory } from '../inventory/model/inventory'; // Importa el modelo Inventory
import { Observable } from 'rxjs';
import { getCookie, setCookie } from 'typescript-cookie';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  public title = 'Inventory Management';
  public isCollapsed = false;
  public currentContent = 'inicio'; 
  public activeButton = 'inicio'; 

  constructor(private inventoryService: InventoryService  
    ) {}

  ngOnInit() {}

  toggleCollapse(content: string) {
    this.isCollapsed = !this.isCollapsed;
    this.currentContent = content;
    this.activeButton = content;
  
    if (content === 'inventario') {
      this.inventoryService.getInventory().subscribe(
        (response: any) => {
          const inventoryData: Inventory[] = response.body as Inventory[];
         
          console.log('Lista de inventario:', inventoryData);
        },
        (error: HttpErrorResponse) => {
          
          console.error('Error al obtener la lista de inventario:', error);
        }
      );
    }


    

  }
  logout() {
    
    setCookie('token', '', { expires: new Date(0) }); 
    
    window.location.href = 'login';
  }
  
}