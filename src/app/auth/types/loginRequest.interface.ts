import { FormControl } from "@angular/forms";

export interface LoginRequestInterface {
  password: FormControl<string | null>;
  email: FormControl<string | null>;
}