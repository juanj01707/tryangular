import { Codigociudad } from "./codigociudad";
import { Codigoempresa } from "./codigoempresa";
export class Codigosede{
    codigosede !: number;
    nombre !: string;
    codigoempresa !: Codigoempresa;
    codigociudad !: Codigociudad;
    
  }
