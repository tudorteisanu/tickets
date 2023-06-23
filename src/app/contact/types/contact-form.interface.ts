import { FormControl } from '@angular/forms';

export interface ContactFormInterface {
  fullname: FormControl<string>;
  email: FormControl<string>;
  description: FormControl<string>;
}