import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterLinkActive } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { InventoryComponent } from './inventory/inventory.component';
import { HttpClientModule } from '@angular/common/http';
import {  AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    InventoryComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterLinkActive,
    AppRoutingModule,
  ],
  exports: [InventoryComponent],
  providers: [
    AppRoutingModule,
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
