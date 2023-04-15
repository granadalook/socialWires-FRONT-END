import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterModule } from './register.module';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {
    path: '',
    component: RegisterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterRoutingModule {}
