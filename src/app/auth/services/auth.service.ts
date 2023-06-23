import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignUpInputInterface } from '../types/signup-request.interface';
import { Observable, of } from 'rxjs';
import { CurrentUserInterface } from 'src/app/shared/types/current-user.interface';
import { LoginRequestInterface } from '../types/login-request.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  public singup(payload: SignUpInputInterface): Observable<CurrentUserInterface> {
    console.log(payload, this.http);

    return of({ token: 'some otken', firstName: 'John', lastName: 'Doe', email: 'Some email', avatar: '' });
  }

  public login(payload: LoginRequestInterface): Observable<CurrentUserInterface> {
    console.log(payload, this.http);

    return of({ token: 'some otken', firstName: 'John', lastName: 'Doe', email: 'Some email', avatar: '' });
  }
}
