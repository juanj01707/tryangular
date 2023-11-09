import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import the Router
import { LoginService } from '../service/login.service';
import { Login } from './model/login';
import { getCookie, setCookie } from 'typescript-cookie';
import { timer } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  loginModel: Login = new Login();
  loginSuccessMessage: string = '';

  constructor(private authService: LoginService, private router: Router) {} // Inject the Router

  ingresar() {
    console.log(this.loginModel.correo);
    console.log(this.loginModel.password);
    this.authService.authenticate(this.loginModel).subscribe(
      (response: any) => {
        const token = response.body.token;
        setCookie('token', token, { expires: 7 });
        this.loginSuccessMessage = 'Inicio de sesión exitoso.';
        timer(3000).subscribe(() => {
          this.loginSuccessMessage = ''; // Borra el mensaje después de 2 segundos
          this.router.navigate(['/inventario']);
        });
        
        
      },
      (error) => {  
        // Handle error
      }
    );
    
  }
  
}