import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './components/contact/contact.component';
import {FormInputComponent} from '../shared/components/form-input/form-input.component';
import {RouterModule, Routes} from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { SubmitContactsEffect } from './store/effects/submit-contacts.effect';
import { ReactiveFormsModule } from '@angular/forms';
import { LoaderComponent } from '@/shared/components/loader/loader.component';
import { FormTextareaComponent } from '../shared/components/form-textarea/form-textarea.component';

const routes: Routes = [
  {
    path: 'contact',
    component: ContactComponent
  }
];

@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    FormInputComponent,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    StoreModule.forFeature('contacts', reducers),
    EffectsModule.forFeature([SubmitContactsEffect]),
    LoaderComponent,
    FormTextareaComponent
  ]
})
export class ContactModule { }
