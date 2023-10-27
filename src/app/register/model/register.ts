import { Codigotipoidentificacion } from "./codigotipoidentificacion"; 
import { Codigoestadocolaborador } from "./codigoestadocolaborador";
import { Codigotipocolaborador } from "./codigotipocolaborador";
import { Codigosede } from "./codigosede";

export class Register{

    nombre !: string;
    identificacion !: number;
    codigotipoidentificacion !: Codigotipoidentificacion;  
    codigoestadocolaborador !: Codigoestadocolaborador;
    codigotipocolaborador !: Codigotipocolaborador;
    codigosede !: Codigosede;
    correo !: string;
    password !: string;

  }