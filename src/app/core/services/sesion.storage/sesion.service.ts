import { Injectable } from '@angular/core';
const JWT_KEY = 'JWT';
const USERNAME_KEY = 'UserName';

@Injectable({
  providedIn: 'root',
})
export class SesionService {
  constructor() {}
  setJwt(jwt: string) {
    window.sessionStorage.removeItem(JWT_KEY);
    window.sessionStorage.setItem(JWT_KEY, jwt);
  }
  getJwt(): string | null {
    return sessionStorage.getItem(JWT_KEY);
  }
  setUserName(userName: string) {
    window.sessionStorage.removeItem(USERNAME_KEY);
    window.sessionStorage.setItem(USERNAME_KEY, userName);
  }
  getUserName() {
    return sessionStorage.getItem(USERNAME_KEY);
  }

  logOut() {
    window.sessionStorage.clear();
  }
}
