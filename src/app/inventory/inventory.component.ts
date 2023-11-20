import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Inventory } from './model/inventory';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { InventoryService } from '../service/inventory.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})

export class InventoryComponent implements OnInit, AfterViewInit {
  public title = 'Inventory Management';
  public isCollapsed = false;
  submitted = false;
  dataInventory!: Inventory;
  inventoryForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private inventoryService: InventoryService) { }

  ngOnInit() {
    this.dataInventory = new Inventory();
    this.inventoryForm = this.formBuilder.group({
      codigoInventario: ['', Validators.required],
      nombre: ['', Validators.required],
      codigoSede: ['', Validators.required],
    });
  }

  ngAfterViewInit() {
    // Add event listeners after the view has been initialized
    const body = document.querySelector('body');
    const sidebar = document.querySelector('nav');
    const toggle = document.querySelector('.toggle');
    const searchBtn = document.querySelector('.search_box');
    const modeSwitch = document.querySelector('.toggle_switch');
    const modeText = document.querySelector('.mode_text');

    if (body && sidebar && toggle && searchBtn && modeSwitch && modeText) {
      toggle.addEventListener("click", () => {
        sidebar.classList.toggle("close");
      });

      searchBtn.addEventListener("click", () => {
        sidebar.classList.remove("close");
      });

      modeSwitch.addEventListener("click", () => {
        body.classList.toggle("dark");
        if (body.classList.contains("dark")) {
          modeText.textContent = "Light mode";
        } else {
          modeText.textContent = "Dark Mode";
        }
      });
    }
  }

  get f() { return this.inventoryForm.controls; }
}
