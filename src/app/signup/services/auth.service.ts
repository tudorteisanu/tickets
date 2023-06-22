import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignUpInputInterface } from '../types/signup-request.interface';
import { Observable, of } from 'rxjs';
import { CredentialsInterface } from 'src/app/shared/types/credentials.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  singup(payload: SignUpInputInterface): Observable<CredentialsInterface> {
    console.log(payload, this.http);

    return of({ token: "some otken" })

  }
}
