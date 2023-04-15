import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllpostComponent } from './components/allpost/allpost.component';

const routes: Routes = [
  {
    path: '',
    component: AllpostComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllPostRoutingModule {}
