import { AuthStateInterface } from '../types/auth-state.interface';

export const authInitialState: AuthStateInterface = {
  isSubmitting: false,
  error: null,
  isLoggedIn: false,
  isLoading: false,
  currentUser: null,
  validationErrors: null,
};
