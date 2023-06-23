import { Action, createReducer, on } from '@ngrx/store';
import { ContactStateInterface } from '../types/contact-state.interface';
import {
  submitContactsAction,
  submitContactsFailureAction,
  submitContactsSuccessAction
} from './actions/submit-contacts.action';
import { contactsInitialState } from './contacts.state';

const contactsReducer = createReducer(
  contactsInitialState,
  on(
    submitContactsAction,
    (state): ContactStateInterface => ({
      ...state,
      isSubmitting: true,
      error: null,
    }),
  ),
  on(
    submitContactsSuccessAction,
    (state): ContactStateInterface => ({
      ...state,
      isSubmitting: false,
      error: null,
    }),
  ),
  on(
    submitContactsFailureAction,
    (state, action): ContactStateInterface => ({
      ...state,
      isSubmitting: false,
      error: action.errors,
    }),
  ),
);

export function reducers(state: ContactStateInterface, action: Action): ContactStateInterface {
  return contactsReducer(state, action);
}
