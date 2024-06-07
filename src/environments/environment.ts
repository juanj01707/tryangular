const urlBase = 'http://localhost:8080';
export const environment = {
    production: false,
  
    inventory: `${urlBase}/api/v1/rest/inventarios`,
    colaboradores: `${urlBase}/api/v1/rest/colaboradores`,
    login : `${urlBase}/authenticate`,
    loginprueba : `${urlBase}/api/v1/rest/colaboradores`,
    register : `${urlBase}/register`,

  
  };