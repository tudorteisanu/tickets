import { FormControl } from '@angular/forms';

export interface LoginFormInterface {
  password: FormControl<string>;
  email: FormControl<string>;
}