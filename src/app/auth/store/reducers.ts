import { Action, createReducer, on } from '@ngrx/store';
import { routerNavigationAction } from '@ngrx/router-store';
import { AuthStateInterface } from '../types/authState.interface';
import {
  signupAction,
  signupFailureAction,
  signupSuccessAction
} from './actions/singup.action';
import { authInitialState } from './auth.state';
import { loginAction, loginFailureAction, loginSuccessAction } from './actions/login.action';
import { logoutAction } from './actions/logout.action';

const authReducer = createReducer(
  authInitialState,
  on(
    signupAction,
    (state): AuthStateInterface => ({
      ...state,
      isSubmitting: true,
      error: null,
    }),
  ),
  on(
    signupSuccessAction,
    (state): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      error: null,
    }),
  ),
  on(
    signupFailureAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors,
    }),
  ),
  on(
    loginSuccessAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      currentUser: action.currentUser,
      isLoggedIn: true
    }),
  ),
  on(
    loginAction,
    (state): AuthStateInterface => ({
      ...state,
      isSubmitting: true,
    }),
  ),
  on(
    loginSuccessAction,
    (state): AuthStateInterface => ({
      ...state,
      isSubmitting: true,
    }),
  ),
  on(
    loginFailureAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors,
    }),
  ),
  on(
    logoutAction,
    (): AuthStateInterface => authInitialState,
  ),
  // on(routerNavigationAction, (): AuthStateInterface => authInitialState),
);

export function reducers(state: AuthStateInterface, action: Action) {
  return authReducer(state, action);
}
