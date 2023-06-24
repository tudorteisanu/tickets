import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TicketInterface } from '../../shared/types/ticket.interface';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {
  public fetchTickets(): Observable<TicketInterface[]> {
    const tickets = [...new Array(9)].map((_, index) => ({
      id: index + 1,
      location: 'Location',
      date: 'Date',
      time: 'Time',
      type: 'Ticket type',
      name: `Cart title ${index + 1}`
    }));

    return of(tickets);
  }
}
