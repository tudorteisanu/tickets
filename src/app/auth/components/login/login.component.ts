import { Component, OnInit } from '@angular/core';
import { PageRoutes } from "../../../shared/types/page-routes.enum";
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { LoginRequestInterface } from '../../types/loginRequest.interface';
import { loginAction } from '../../store/actions/login.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup<LoginRequestInterface> = new FormGroup({
    password: new FormControl(''),
    email: new FormControl(''),
  });

  constructor(private fb: FormBuilder, private store: Store) {
  }

  signUpUrl: PageRoutes = PageRoutes.SignUp

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.loginForm = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(256)]],
      email: ['', [Validators.required]],
    })
  }

  login(): void {
    this.loginForm.markAllAsTouched();
    console.log(this.loginForm);

    if (this.loginForm.invalid) {
      console.error('Please fill the form');
      return
    }


    this.store.dispatch(loginAction({ loginInput: this.loginForm.value as any }))

  }


}
