import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./components/login/login.module').then(
        (modulo) => modulo.LoginModule
      ),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./components/register/register.module').then(
        (modulo) => modulo.RegisterModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
