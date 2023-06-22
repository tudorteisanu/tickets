import { createAction, props } from "@ngrx/store";
import { ActionTypes } from "../actionTypes";
import { BackendError } from "src/app/shared/types/backendError.interface";
import { CredentialsInterface } from "src/app/shared/types/credentials.interface";
import { SignUpInputInterface } from "../../types/signup-request.interface";

export const signupAction = createAction(
  ActionTypes.Signup,
  props<{ signUpInput: SignUpInputInterface }>()
);


export const signupSuccessAction = createAction(
  ActionTypes.SignupSuccess,
  props<{ credentials: CredentialsInterface }>()
);


export const signupFailureAction = createAction(
  ActionTypes.SignupFailure,
  props<{ error: BackendError | null }>()
);
