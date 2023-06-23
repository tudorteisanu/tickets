import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ContactStateInterface } from '../types/contact-state.interface';

export const contactsFeatureSelector =
  createFeatureSelector<ContactStateInterface>('contacts');

export const isSubmittingSelector = createSelector(
  contactsFeatureSelector,
  (state: ContactStateInterface) => state.isSubmitting,
);

export const errorMessageSelector = createSelector(
  contactsFeatureSelector,
  (state: ContactStateInterface) => state.error,
);