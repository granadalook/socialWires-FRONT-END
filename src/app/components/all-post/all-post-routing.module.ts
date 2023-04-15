import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllpostComponent } from './components/allpost/allpost.component';
import { LoginGuard } from 'src/app/guard/login.guard';

const routes: Routes = [
  {
    path: '',
    title: 'Allpost',
    component: AllpostComponent,
    canActivate: [LoginGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllPostRoutingModule {}
