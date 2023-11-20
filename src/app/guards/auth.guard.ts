import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { getCookie } from '../cookie/cookie-utils';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }

  isAuthenticated(): boolean {
    // Verifica si el usuario está autenticado, por ejemplo, comprobando si hay un token en las cookies.
    const token = getCookie('token'); // Asegúrate de implementar la función getCookie.

    return token !== null;
  }
}