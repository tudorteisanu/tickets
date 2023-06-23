import { Component, OnInit } from '@angular/core';
import { PageRoutes } from '../../../shared/types/page-routes.enum';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { loginAction } from '../../store/actions/login.action';
import { LoginFormInterface } from '@/auth/types/login-form.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup<LoginFormInterface>;
  signUpUrl: PageRoutes = PageRoutes.SignUp;

  constructor(private fb: FormBuilder, private store: Store) {
  }

  ngOnInit (): void {
    this.createForm();
  }

  public login(): void {
    this.loginForm.markAllAsTouched();
    
    if (this.loginForm.invalid) {
      console.error('Please fill the form');

      return;
    }

    this.store.dispatch(loginAction({ loginInput: this.loginForm.getRawValue() }));
  }

  private createForm(): void {
    this.loginForm = this.fb.nonNullable.group({
      password: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(256)]],
      email: ['', [Validators.required]],
    });
  }
}
