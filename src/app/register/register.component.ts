import { Component } from '@angular/core';
import { Register } from './model/register';
import { RegisterService } from '../service/register.service';
import { Codigotipoidentificacion } from './model/codigotipoidentificacion';
import { Codigoestadocolaborador } from './model/codigoestadocolaborador';
import { Codigotipocolaborador } from './model/codigotipocolaborador';
import { Codigosede } from './model/codigosede';
import { Codigoempresa } from './model/codigoempresa';
import { Codigociudad } from './model/codigociudad';
import { Codigodepartamento } from './model/codigodepartamento';
import { Codigopais } from './model/codigopais';
import { Router } from '@angular/router'; 
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {

  registerModel: Register = new Register();
  registerSuccessMessage: string = '';

  // Agrega propiedades para los elementos select
  tipoIdentificacionOptions: any[] = [
    { value: 0, label: 'Seleccione una opción' },
    { value: 1, label: 'Cedula de ciudadanía' },
    { value: 2, label: 'Tarjeta de identidad' },
    { value: 3, label: 'Pasaporte' },
  ];

  estadoColaboradorOptions: any[] = [
    { value: 1, label: 'Contratado' },
    { value: 2, label: 'Despedido' },
  ];

  tipoColaboradorOptions: any[] = [
    { value: 1, label: 'carpintero' },
    { value: 2, label: 'vendedor' },
    { value: 3, label: 'administrador' },
  ];

  sedeOptions: any[] = [
    { value: 1, label: 'Sede Rionegro' },
    { value: 2, label: 'Sede Carmen' },
    { value: 3, label: 'Sede Santuario' },
  ];

  constructor(private authService: RegisterService, private router: Router) {
    // Inicializa las propiedades del modelo con valores predeterminados
    this.registerModel.codigotipoidentificacion = {
      codigotipoidentificacion: 0,
      nombre: '',
    };
    this.registerModel.codigoestadocolaborador = {
      codigoestadocolaborador: 0,
      nombre: '',
    };
    this.registerModel.codigotipocolaborador = {
      codigotipocolaborador: 0,
      nombre: '',
      salario: 0,
      funcion: '',
    };
    this.registerModel.codigosede = {
      codigosede: 0,
      nombre: '',
      codigoempresa: {
        codigoempresa: 0,
        nombre: '',
        nit: '',
      },
      codigociudad: {
        codigociudad: 0,
        nombre: '',
        codigodepartamento: {
          codigodepartamento: 0,
          nombre: '',
          codigopais: {
            codigopais: 0,
            nombre: '',
          },
        },
      },
    };
  }

  submitForm(event: Event): void {
    event.preventDefault();

    const formData = {
      nombre: this.registerModel.nombre,
      identificacion: this.registerModel.identificacion,
      codigotipoidentificacion: this.registerModel.codigotipoidentificacion,
      codigoestadocolaborador: this.registerModel.codigoestadocolaborador,
      codigotipocolaborador: this.registerModel.codigotipocolaborador,
      codigosede: this.registerModel.codigosede,
      correo: this.registerModel.correo,
      password: this.registerModel.password,
    };

    this.authService.register(formData).subscribe((response) => {
      console.log('Registro exitoso', response);
      // Establece el mensaje de registro exitoso
    this.registerSuccessMessage = 'Registro exitoso. Inicia sesión ahora.';

    // Redirige al usuario a la página de inicio de sesión después de un retraso
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 2000); // Redirige después de 2 segundos


    });
  }
}