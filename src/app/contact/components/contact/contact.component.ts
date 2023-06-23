import { submitContactsAction } from '@/contact/store/actions/submit-contacts.action';
import { errorMessageSelector, isSubmittingSelector } from '@/contact/store/contacts.selectors';
import { ContactFormInterface } from '@/contact/types/contact-form.interface';
import { BackendErrorInterface } from '@/shared/types/backend-error.interface';
import { Component, OnInit, Signal } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit{
  contactsForm: FormGroup<ContactFormInterface>;
  isSubmitting: Signal<boolean> = this.store.selectSignal(isSubmittingSelector);
  errorMessage: Signal<BackendErrorInterface | null> = this.store.selectSignal(errorMessageSelector);

  constructor(private fb: NonNullableFormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.createForm();
  }

  public submit(): void {
    this.contactsForm.markAllAsTouched();

    if (this.contactsForm.valid) {
      this.store.dispatch(submitContactsAction({ contactsInput: this.contactsForm.getRawValue()}));
    }
  }

  private createForm(): void {
    this.contactsForm = this.fb.group({
      fullname: ['test', [Validators.required, Validators.minLength(2), Validators.maxLength(128)]],
      email: ['test@mail.ru', [Validators.required, Validators.email]],
      description: ['', [Validators.minLength(10), Validators.maxLength(256)]]
    });
  }
}
