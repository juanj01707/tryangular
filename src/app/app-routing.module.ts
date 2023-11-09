import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { InventoryComponent } from './inventory/inventory.component';

const routes: Routes = [
  {path:'login', component: LoginComponent },
  {path:'', component:LoginComponent },
  {path: 'register', component: RegisterComponent },
  {path: 'inventario', component: InventoryComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
