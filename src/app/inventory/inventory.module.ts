import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { InventoryComponent } from './inventory.component';
import { FormsModule } from '@angular/forms';

const ADMIN_ROUTES: Routes = [
  { path: '', component: InventoryComponent }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class InventoryModule {

 }
