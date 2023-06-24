import { FormControl } from '@angular/forms';

export interface CreateTicketFormInterface {
  startTime: FormControl<string>;
  endTime: FormControl<string>;
  date: FormControl<string>;
  type: FormControl<string>;
  title: FormControl<string>;
  description: FormControl<string>;
}