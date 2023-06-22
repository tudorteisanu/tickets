import {Component, Input, Optional, Self, ViewEncapsulation} from '@angular/core';
import {CommonModule, NgOptimizedImage} from "@angular/common";
import {ControlValueAccessor, NgControl, ReactiveFormsModule} from "@angular/forms";


type ErrorMessage = Record<string, string>;

const DEFAULT_ERROR_MESSAGES: ErrorMessage = {
  required: 'This is required field',
  email: 'Invalid email format',
  minlength: 'Minimal length is {requiredLength} ({actualLength})',
  maxlength: 'Minimal length is {requiredLength} ({actualLength})'

}

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgOptimizedImage],
  encapsulation: ViewEncapsulation.None
})
export class FormInputComponent implements ControlValueAccessor{
  @Input() icon = '';
  @Input() value = '';
  @Input() label = '';
  @Input() inputType = 'text';
  @Input() disabled = false;
  @Input() readonly  = false;
  @Input() customErrorMessages: Record<string, string>  = {};
  @Input() hideDetails = false;


  get iconUrl(): string {
    return `assets/icons/${this.icon}.svg`
  }


  constructor(@Self() @Optional() private control: NgControl) {
    if (this.control) {
      this.control.valueAccessor = this;
    }
  }

  get areMessageShown(): boolean {
    return !!this.control?.touched || !!this.control?.dirty;
  }

  get errors(): any {
    return this.control?.errors;
  }

  get errorMessages(): ErrorMessage {
    return {
      ...DEFAULT_ERROR_MESSAGES,
      ...this.customErrorMessages
    }
  }

  getError(key: string): string {
    return this.errorMessages[key] || ''
  }

  get errorMessage(): string {
    if (!this.control || !this.errors || this.hideDetails) {
      return '';
    }

    return Object.entries(this.errors)
    .map(([value, options]) => {

      if (options && typeof options === 'object') {
        return this.getError(value).replace(/{([^{}]*)}/g, (_, key) => {
          return this.getPropertyByString(options, key) || '';
        })
      }

      return this.getError(value);
    })
    .join(', '); 
  }

  getPropertyByString(object: object, property: string, sep = '.') {
    try {
      let translation: any = object;

      property.split(sep).map((key) => {
        translation = translation[key];
      });
      return translation;
    } catch (e) {
      return property;
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onChange = (value: any) => {};

  onTouched = () => {};
  writeValue(value: any): void {
    this.onChange(value);
  }

  registerOnChange(fn: (rating: number) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
