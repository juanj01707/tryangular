import { Component } from '@angular/core';
import { LoginService } from '../service/login.service';
import { Login } from './model/login';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  loginModel: Login = new Login();
  loginMessageSuccess: string = '';
  constructor(private authService : LoginService){}

  ingresar(){
    console.log(this.loginModel.correo)
    console.log(this.loginModel.password)
    this.authService.authenticate(this.loginModel).subscribe(
      (response: any) => {
        document.cookie = `token=${response.token}; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/`;
        this.loginMessageSuccess = '¡Inicio de sesión exitoso!';
        //this.router.navigate(['/loquelesiguealogin']);
      },
      (error) => {

      }

    );
   

  }


}
