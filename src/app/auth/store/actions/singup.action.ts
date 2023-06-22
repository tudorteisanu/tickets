import { createAction, props } from "@ngrx/store";
import { ActionTypes } from "../actionTypes";
import { SignUpInputInterface } from "../../types/signup-request.interface";
import { CurrentUserInterface } from "src/app/shared/types/currentUser.interface";
import { BackendError } from "src/app/shared/types/backendError.interface";

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
  props<{ errors: BackendError; errorMessage?: string }>()
);
