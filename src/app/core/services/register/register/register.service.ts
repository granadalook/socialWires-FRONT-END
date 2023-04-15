import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iuser } from 'src/app/models/User.model';
import { environment } from 'src/environments/envitonmetns';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private http: HttpClient) {}
  RegisterNewUser(NewUser: Iuser) {
    return this.http.post<Iuser>(
      `${environment.Url_Base}${environment.Usuario}`,
      NewUser
    );
  }
}
