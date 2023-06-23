import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '../actionTypes';
import { CurrentUserInterface } from 'src/app/shared/types/current-user.interface';
import { BackendErrorInterface } from 'src/app/shared/types/backend-error.interface';
import { LoginRequestInterface } from '../../types/login-request.interface';

export const loginAction = createAction(
  ActionTypes.Login,
  props<{ loginInput: LoginRequestInterface }>()
);

export const loginSuccessAction = createAction(
  ActionTypes.LoginSuccess,
  props<{ currentUser: CurrentUserInterface }>()
);

export const loginFailureAction = createAction(
  ActionTypes.LoginFailure,
  props<{ errors: BackendErrorInterface; errorMessage?: string }>()
);
