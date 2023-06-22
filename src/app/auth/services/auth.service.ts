import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignUpInputInterface } from '../types/signup-request.interface';
import { Observable, of } from 'rxjs';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';
import { LoginRequestInterface } from '../types/loginRequest.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  singup(payload: SignUpInputInterface): Observable<CurrentUserInterface> {
    console.log(payload, this.http);

    return of({ token: "some otken", firstName: "John", lastName: "Doe", email: "Some email", avatar: "" })
  }

  login(payload: LoginRequestInterface): Observable<CurrentUserInterface> {
    console.log(payload, this.http);

    return of({ token: "some otken", firstName: "John", lastName: "Doe", email: "Some email", avatar: "" })
  }
}
