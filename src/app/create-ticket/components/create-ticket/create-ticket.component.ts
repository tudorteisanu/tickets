import { isSubmittingSelector, errorMessageSelector } from '@/auth/store/auth.selectors';
import { CreateTicketFormInterface } from '@/create-ticket/types/create-ticket-form.interface';
import { Component, OnInit, Signal } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.scss']
})
export class CreateTicketComponent implements OnInit {
  createTicketForm: FormGroup<CreateTicketFormInterface>;
  isSubmitting: Signal<boolean> = this.store.selectSignal(isSubmittingSelector);
  errorMessage: Signal<string | null> = this.store.selectSignal(errorMessageSelector);

  constructor(private fb: NonNullableFormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.createForm();
  }

  public submit(): void {
    this.createTicketForm.markAllAsTouched();

    // if (this.contactsForm.valid) {
    //   this.store.dispatch(submitContactsAction({ contactsInput: this.contactsForm.getRawValue()}));
    // }
  }

  private createForm(): void {
    this.createTicketForm = this.fb.group({
      startTime: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(128)]],
      endTime: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(128)]],
      title: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(128)]],
      type: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(128)]],
      description: ['', [Validators.minLength(10), Validators.maxLength(256)]],
      date: ['', [Validators.minLength(10), Validators.maxLength(256)]]
    });
  }
}
