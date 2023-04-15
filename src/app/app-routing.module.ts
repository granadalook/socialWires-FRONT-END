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
  {
    path: 'post',
    loadChildren: () =>
      import('./components/post/post.module').then(
        (modulo) => modulo.PostModule
      ),
  },
  {
    path: 'Allpost',
    loadChildren: () =>
      import('./components/all-post/all-post.module').then(
        (modulo) => modulo.AllPostModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
