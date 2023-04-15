import { Injectable } from '@angular/core';
import { CanActivate, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../core/services/login/login.service';
import { ILoginRest } from '../models/LoginRes.model';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate {
  login$?: ILoginRest;
  constructor(private loginService: LoginService) {}
  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    this.loginService.user$.subscribe((res) => (this.login$ = res));
    if (this.login$?.access_token) {
      return true;
    }
    console.log('Disponible solo para usuarios registrados');
    return false;
  }
}
