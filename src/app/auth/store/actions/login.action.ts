import { createAction, props } from "@ngrx/store";
import { ActionTypes } from "../actionTypes";
import { CurrentUserInterface } from "src/app/shared/types/currentUser.interface";
import { BackendError } from "src/app/shared/types/backendError.interface";
import { LoginRequestInterface } from "../../types/loginRequest.interface";

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
  props<{ errors: BackendError; errorMessage?: string }>()
);
