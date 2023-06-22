import { Action, createReducer, on } from '@ngrx/store';
import { routerNavigationAction } from '@ngrx/router-store';
import { SignUpStateInterface } from '../types/signup-state.interface';
import {
  signupAction,
  signupFailureAction,
  signupSuccessAction
} from './actions/singup.action';

const initialState: SignUpStateInterface = {
  isSubmitting: false,
  error: null,
  validationErrors: null
};

const createArticleReducer = createReducer(
  initialState,
  on(
    signupAction,
    (state): SignUpStateInterface => ({
      ...state,
      isSubmitting: true,
      error: null,
    }),
  ),
  on(
    signupSuccessAction,
    (state): SignUpStateInterface => ({
      ...state,
      isSubmitting: false,
      error: null,
    }),
  ),
  on(
    signupFailureAction,
    (state, action): SignUpStateInterface => ({
      ...state,
      isSubmitting: false,
      error: action.error,
    }),
  ),
  on(routerNavigationAction, (): SignUpStateInterface => initialState),
);

export function reducers(state: SignUpStateInterface, action: Action) {
  return createArticleReducer(state, action);
}
