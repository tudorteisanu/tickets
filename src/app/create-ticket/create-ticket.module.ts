import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateTicketComponent } from './components/create-ticket/create-ticket.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { LoaderComponent } from '@/shared/components/loader/loader.component';
import { FormTextareaComponent } from '@/shared/components/form-textarea/form-textarea.component';
import { FormInputComponent } from '@/shared/components/form-input/form-input.component';

const routes: Routes = [
  {
    path: 'create-ticket',
    component: CreateTicketComponent
  }
];

@NgModule({
  declarations: [
    CreateTicketComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
}),
    ReactiveFormsModule,
    LoaderComponent,
    FormTextareaComponent,
    FormInputComponent,
  ]
})
export class CreateTicketModule { }
