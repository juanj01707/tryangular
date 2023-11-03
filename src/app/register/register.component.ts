import { Component } from '@angular/core';
import { Register } from './model/register';
import { RegisterService } from '../service/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {

  registerModel: Register= new Register();
  loginMessageSuccess: string = '';
  constructor(private authService : RegisterService){}





  onSelectChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const seleccion = target.value;

    if (seleccion === '1') {
      const codigotipoidentificacion = {
        codigotipoidentificacion: 1,
        nombre: 'Cédula'
      };

      console.log(codigotipoidentificacion);
    } else if (seleccion === '2') {
      const codigotipoidentificacion = {
        codigotipoidentificacion: 2,
        nombre: 'Tarjeta de Identidad'
      };

      console.log(codigotipoidentificacion);
    } else if (seleccion === '3') {
      const codigotipoidentificacion = {
        codigotipoidentificacion: 3,
        nombre: 'Pasaporte'
      };

      console.log(codigotipoidentificacion);
    }
  }
}




