import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllPostRoutingModule } from './all-post-routing.module';
import { AllpostComponent } from './components/allpost/allpost.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AllpostComponent],
  imports: [
    CommonModule,
    AllPostRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class AllPostModule {}
