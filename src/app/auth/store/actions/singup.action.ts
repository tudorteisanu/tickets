import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '../actionTypes';
import { SignUpInputInterface } from '../../types/signup-request.interface';
import { CurrentUserInterface } from 'src/app/shared/types/current-user.interface';
import { BackendErrorInterface } from 'src/app/shared/types/backend-error.interface';

export const signupAction = createAction(
  ActionTypes.Signup,
  props<{ signUpInput: SignUpInputInterface }>()
);

export const signupSuccessAction = createAction(
  ActionTypes.SignupSuccess,
  props<{ currentUser: CurrentUserInterface }>()
);

export const signupFailureAction = createAction(
  ActionTypes.SignupFailure,
  props<{ errors: BackendErrorInterface; errorMessage?: string }>()
);
