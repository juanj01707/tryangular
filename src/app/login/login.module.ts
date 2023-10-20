import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';

const ADMIN_ROUTES: Routes = [
  { path: '', component: LoginComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class LoginModule { }
