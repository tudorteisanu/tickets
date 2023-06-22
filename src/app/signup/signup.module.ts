import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './components/signup/signup.component';
import {RouterModule, Routes} from "@angular/router";
import {FormInputComponent} from "../shared/components/form-input/form-input.component";

const routes: Routes = [
  {
    path: '',
    component: SignupComponent
  }
]

@NgModule({
  declarations: [
    SignupComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormInputComponent
  ]
})
export class SignupModule { }
