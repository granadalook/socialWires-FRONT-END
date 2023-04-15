import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { Ilogin } from 'src/app/models/Login.model';
import { ILoginRest } from 'src/app/models/LoginRes.model';
import { environment } from 'src/environments/envitonmetns';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private user = new BehaviorSubject<ILoginRest>({} as ILoginRest);
  public user$ = this.user.asObservable();
  constructor(private http: HttpClient) {}

  login(userAndPassword: Ilogin) {
    return this.http
      .post<ILoginRest>(
        `${environment.Url_Base}${environment.Login} `,
        userAndPassword
      )
      .pipe(
        tap((res) => {
          this.user.next(res);
        })
      );
  }
}
