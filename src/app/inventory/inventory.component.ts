import { Component, OnInit } from '@angular/core';
import { Inventory } from './model/inventory';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { InventoryService } from '../service/inventory.service';



@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})


export class InventoryComponent implements OnInit {
  public title = 'Inventory Management';
  public isCollapsed = false;
  submitted = false;
  dataInventory!: Inventory;
  inventoryForm!: FormGroup;

    
    constructor(private formBuilder: FormBuilder, private invetoryService: InventoryService) { }

    ngOnInit() {

        this.dataInventory = new Inventory();
        this.inventoryForm = this.formBuilder.group({
          codigoInventario: ['',Validators.required],
          nombre:  ['',Validators.required],
          codigoSede:  ['',Validators.required],
        });

    }

    get f() { return this.inventoryForm.controls; }


}
