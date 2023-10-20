const urlBase = 'http://localhost:8080';
export const environment = {
    production: false,
  
    inventory: `${urlBase}/api/v1/rest/inventarios`,
    login : `${urlBase}/authenticate`,
    register : `${urlBase}/register`,

  
  };