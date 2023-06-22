import {Component, Input, ViewEncapsulation} from '@angular/core';
import {CommonModule, NgOptimizedImage} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgOptimizedImage],
  encapsulation: ViewEncapsulation.None
})
export class FormInputComponent {
  @Input() icon: string = '';
  @Input() value: string = '';
  @Input() label: string = '';
  @Input('type') inputType: string = 'text';

  get iconUrl(): string {
    return `assets/icons/${this.icon}.svg`
  }

  onChange(value: string) {

  }
  onTouched() {}
}
