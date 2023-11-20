import { Codigotipoidentificacion } from "./codigotipoidentificacion"; 
import { Codigoestadocolaborador } from "./codigoestadocolaborador";
import { Codigotipocolaborador } from "./codigotipocolaborador";
import { Codigosede } from "./codigosede";

export class Register{
  nombre: string = '';
  identificacion: string = '';
  codigotipoidentificacion: {
    codigotipoidentificacion: number;
    nombre: string;
  } = { codigotipoidentificacion: 0, nombre: '' };
  codigoestadocolaborador: {
    codigoestadocolaborador: number;
    nombre: string;
  } = { codigoestadocolaborador: 0, nombre: '' };
  codigotipocolaborador: {
    codigotipocolaborador: number;
    nombre: string;
    salario: number;
    funcion: string;
  } = {
    codigotipocolaborador: 0,
    nombre: '',
    salario: 0,
    funcion: '',
  };
  codigosede: {
    codigosede: number;
    nombre: string;
    codigoempresa: {
      codigoempresa: number;
      nombre: string;
      nit: string;
    };
    codigociudad: {
      codigociudad: number;
      nombre: string;
      codigodepartamento: {
        codigodepartamento: number;
        nombre: string;
        codigopais: {
          codigopais: number;
          nombre: string;
        };
      };
    };
  } = {
    codigosede: 0,
    nombre: '',
    codigoempresa: { codigoempresa: 0, nombre: '', nit: '' },
    codigociudad: { codigociudad: 0, nombre: '', codigodepartamento: { codigodepartamento: 0, nombre: '', codigopais: { codigopais: 0, nombre: '' } } },
  };
  correo: string = '';
  password: string = '';

  }