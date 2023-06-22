import { FormControl } from "@angular/forms";

export interface SignUpInputInterface {
  firstName: FormControl<string | null>;
  lastName: FormControl<string | null>;
  password: FormControl<string | null>;
  passwordConfirmation: FormControl<string | null>;
  email: FormControl<string | null>;
  terms: FormControl<boolean | null>;
}