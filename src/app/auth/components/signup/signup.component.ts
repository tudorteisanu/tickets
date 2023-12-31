import { Component, OnInit } from '@angular/core';
import { PageRoutes } from '../../../shared/types/page-routes.enum';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { confirmedValidator } from 'src/app/shared/utils/validation';
import { SignUpInputInterface } from '../../types/signup-request.interface';
import { signupAction } from '../../store/actions/singup.action';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  form: FormGroup<SignUpInputInterface>;
  loginUrl: PageRoutes = PageRoutes.LogIn;
  errorMessages = {
    confirmedValidator: 'Password missmatch!'
  };
  terms = false;

  constructor(private fb: FormBuilder, private store: Store) {
  }

  ngOnInit(): void {
    this.createForm();
  }

  public singup(): void {
    this.form.markAllAsTouched();

    if (this.form.invalid) {
      console.error('Please fill the form');

      return;
    }

    this.store.dispatch(signupAction({ signUpInput: this.form.value as unknown as SignUpInputInterface }));
  }

  private createForm(): void {
    this.form = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(150)]],
      lastName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(150)]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(256)]],
      passwordConfirmation: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
    },
    {
      validator: confirmedValidator('password', 'passwordConfirmation')
    });
  }
}
