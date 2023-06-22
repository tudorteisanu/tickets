import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SignUpStateInterface } from '../types/signup-state.interface';

export const signupFeatureSelector =
  createFeatureSelector<SignUpStateInterface>('singup');

export const isSubmittingSelector = createSelector(
  signupFeatureSelector,
  (state: SignUpStateInterface) => state.isSubmitting,
);

export const validationErrorsSelector = createSelector(
  signupFeatureSelector,
  (state: SignUpStateInterface) => state.validationErrors,
);

export const errorMessageSelector = createSelector(
  signupFeatureSelector,
  (state: SignUpStateInterface) => state.error,
);
