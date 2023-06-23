import { CurrentUserInterface } from 'src/app/shared/types/current-user.interface';
import { BackendErrorInterface } from 'src/app/shared/types/backend-error.interface';

export interface AuthStateInterface {
  isSubmitting: boolean;
  isLoading: boolean;
  currentUser: CurrentUserInterface | null;
  isLoggedIn: boolean | null;
  validationErrors: BackendErrorInterface | null;
  error: string | null;
}
