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


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {


  registerModel: Register= new Register();
  loginMessageSuccess: string = '';
  
  // Agrega propiedades para los elementos select
  tipoIdentificacionOptions: any[] = [
    { value: 0, label: 'Seleccione una opcion' },
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

  constructor(private authService : RegisterService){
    this.registerModel.codigotipoidentificacion = new Codigotipoidentificacion();
    this.registerModel.codigoestadocolaborador = new Codigoestadocolaborador();
    this.registerModel.codigotipocolaborador = new Codigotipocolaborador();
    this.registerModel.codigosede = new Codigosede();
    this.registerModel.codigosede.codigoempresa = new Codigoempresa();
    this.registerModel.codigosede.codigociudad = new Codigociudad();
    this.registerModel.codigosede.codigociudad.codigodepartamento = new Codigodepartamento();
    this.registerModel.codigosede.codigociudad.codigodepartamento.codigopais = new Codigopais();
  }

  submitForm(event: Event): void{
    event.preventDefault();

    //Construir objeto JSON
    const formData = {
      nombre: this.registerModel.nombre,
      identificacion: this.registerModel.identificacion,


      codigotipoidentificacion: {
        codigotipoidentificacion: this.registerModel.codigotipoidentificacion.codigotipoidentificacion,
        nombre: this.registerModel.codigotipoidentificacion.nombre,
      },


      codigoestadocolaborador: {
        codigoestadocolaborador: this.registerModel.codigoestadocolaborador.codigoestadocolaborador,
        nombre: this.registerModel.codigoestadocolaborador.nombre,
      },


      codigotipocolaborador: {
        codigotipocolaborador: this.registerModel.codigotipocolaborador.codigotipocolaborador,
        nombre: this.registerModel.codigotipocolaborador.nombre,
        salario: this.registerModel.codigotipocolaborador.salario,
        funcion: this.registerModel.codigotipocolaborador.funcion,
      },


      codigosede: {
        codigosede: this.registerModel.codigosede.codigosede,
        nombre: this.registerModel.codigosede.nombre,
        codigoempresa: {
          codigoempresa: this.registerModel.codigosede.codigoempresa.codigoempresa,
          nombre: this.registerModel.codigosede.codigoempresa.nombre,
          nit: this.registerModel.codigosede.codigoempresa.nit,
        },
        codigociudad: {
          codigociudad: this.registerModel.codigosede.codigociudad.codigociudad,
          nombre: this.registerModel.codigosede.codigociudad.nombre,
          codigodepartamento: {
            codigodepartamento: this.registerModel.codigosede.codigociudad.codigodepartamento.codigodepartamento,
            nombre: this.registerModel.codigosede.codigociudad.codigodepartamento.nombre,
            codigopais: {
              codigopais: this.registerModel.codigosede.codigociudad.codigodepartamento.codigopais.codigopais,
              nombre: this.registerModel.codigosede.codigociudad.codigodepartamento.codigopais.nombre,
            },
          },
        },
      },




      correo: this.registerModel.correo,
      password: this.registerModel.password,
    };
    
    console.log(this.registerModel.nombre);
    console.log(this.registerModel.identificacion);
    console.log(this.registerModel.codigotipoidentificacion);
    
    this.authService.register(formData)
      .subscribe(response => {
        console.log('Registro exitoso', response);
      });

    
  }


}




