import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthStateInterface } from '../types/auth-state.interface';

export const authFeatureSelector =
  createFeatureSelector<AuthStateInterface>('auth');

export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (state: AuthStateInterface) => state.isSubmitting,
);

export const validationErrorsSelector = createSelector(
  authFeatureSelector,
  (state: AuthStateInterface) => state.validationErrors,
);

export const errorMessageSelector = createSelector(
  authFeatureSelector,
  (state: AuthStateInterface) => state.error,
);

export const isLoggedInSelector = createSelector(
  authFeatureSelector,
  (state: AuthStateInterface) => state.isLoggedIn,
);

export const currentUserSelector = createSelector(
  authFeatureSelector,
  (state: AuthStateInterface) => state.currentUser,
);