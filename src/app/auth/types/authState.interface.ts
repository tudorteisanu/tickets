import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';
import { BackendError } from 'src/app/shared/types/backendError.interface';

export interface AuthStateInterface {
  isSubmitting: boolean;
  isLoading: boolean;
  currentUser: CurrentUserInterface | null;
  isLoggedIn: boolean | null;
  validationErrors: BackendError | null;
  error: string | null;
}
