import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateTicketInputInterface } from '../types/create-ticket-input.interface';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateTicketService {
  constructor(private http: HttpClient) { }

  createTicket(createTicketInput: CreateTicketInputInterface): Observable<CreateTicketInputInterface> {
    return of(createTicketInput);
  }
}
