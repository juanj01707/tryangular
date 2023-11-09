import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import the Router
import { LoginService } from '../service/login.service';
import { Login } from './model/login';
import { getCookie, setCookie } from 'typescript-cookie';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  loginModel: Login = new Login();
  loginMessageSuccess: string = '';

  constructor(private authService: LoginService, private router: Router) {} // Inject the Router

  ingresar() {
    console.log(this.loginModel.correo);
    console.log(this.loginModel.password);
    this.authService.authenticate(this.loginModel).subscribe(
      (response: any) => {
        const token = response.body.token;
        setCookie('token', token, { expires: 7 });
        this.loginMessageSuccess = '¡Inicio de sesión exitoso!';
        this.router.navigate(['/inventario']); // Now the router is accessible
      },
      (error) => {
        // Handle error
      }
    );
  }
}