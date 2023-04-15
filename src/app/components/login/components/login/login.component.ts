import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/core/services/login/login.service';
import { SesionService } from 'src/app/core/services/sesion.storage/sesion.service';
import { Ilogin } from 'src/app/models/Login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(
    private formBuilder: UntypedFormBuilder,
    private loginService: LoginService,
    private route: Router,
    private sesionStorage: SesionService
  ) {}
  formularioLogin: UntypedFormGroup = this.formBuilder.group({
    userName: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  login(loginUser: Ilogin) {
    this.loginService.login(loginUser).subscribe({
      next: (res) => {
        if (res) {
          this.sesionStorage.setJwt(res.access_token);
          this.sesionStorage.setUserName(res.user.userName);
          this.formularioLogin.reset();
          this.route.navigate(['post']);
        }
      },
      error: (error: HttpErrorResponse) => {
        if (error.status === 302 || error.status === 401) {
          console.log('Usuario u contraseña no coinciden');
        }
      },
    });
  }
  registro() {
    this.route.navigate(['register']);
  }
}
