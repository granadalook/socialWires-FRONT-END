import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/core/services/register/register/register.service';
import { Iuser } from 'src/app/models/User.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  constructor(
    private formBuilder: UntypedFormBuilder,
    private registerService: RegisterService,
    private route: Router
  ) {}
  formularioRegister: UntypedFormGroup = this.formBuilder.group({
    userName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    fullName: ['', [Validators.required]],
  });

  RegisterUsuario(newUsuario: Iuser) {
    this.registerService.RegisterNewUser(newUsuario).subscribe({
      next: (res) => {
        this.formularioRegister.reset();
        this.route.navigate(['']);
      },
      error: (error: HttpErrorResponse) => {
        if (error.status === 404) {
          console.log('Ese Email ya se encuentra en uso,Prueba con otro');
        }
      },
    });
  }
}
