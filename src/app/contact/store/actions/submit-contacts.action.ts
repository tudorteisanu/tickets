import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '../actionTypes';
import { BackendErrorInterface } from 'src/app/shared/types/backend-error.interface';
import { ContactInputInterface } from '@/contact/types/contact-input.interface';

export const submitContactsAction = createAction(
  ActionTypes.SubmitContacts,
  props<{ contactsInput: ContactInputInterface }>()
);

export const submitContactsSuccessAction = createAction(
  ActionTypes.SubmitContactsSuccess
);

export const submitContactsFailureAction = createAction(
  ActionTypes.SubmitContactsFailure,
  props<{ errors: BackendErrorInterface }>()
);
