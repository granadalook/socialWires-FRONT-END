import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginService } from 'src/app/core/services/login/login.service';
import { SesionService } from 'src/app/core/services/sesion.storage/sesion.service';
import { ILoginRest } from 'src/app/models/LoginRes.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  usuario?: ILoginRest;
  usuario$?: Subscription;
  constructor(
    private sesionService: SesionService,
    private route: Router,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.usuario$ = this.loginService.user$.subscribe((res) => {
      this.usuario = res;
    });
  }
  login() {
    this.route.navigate(['']);
  }
  CreateMessage() {
    this.route.navigate(['post']);
  }
  AllMessages() {
    this.route.navigate(['Allpost']);
  }
  ngOnDrestroy() {
    this.usuario$?.unsubscribe();
  }
  logOut() {
    this.usuario = undefined;
    this.sesionService.logOut();
    this.route.navigate(['']);
  }
}
