import { BackendError } from "src/app/shared/types/backendError.interface";
import { ValidationErrors } from "src/app/shared/types/validationErrors.interface";

export interface SignUpStateInterface {
    isSubmitting: boolean;
    error: null | BackendError;
    validationErrors: ValidationErrors | null;
}