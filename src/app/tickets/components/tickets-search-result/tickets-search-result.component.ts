import { isLoadingsSelector, ticketsSelector } from '@/tickets/store/tickets.selectors';
import { TicketInterface } from '@/shared/types/ticket.interface';
import { Component, Signal } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-tickets-search-result',
  templateUrl: './tickets-search-result.component.html',
  styleUrls: ['./tickets-search-result.component.scss']
})
export class TicketsSearchResultComponent {
  readonly tickets: Signal<TicketInterface[]> = this.store.selectSignal(ticketsSelector);
  readonly isLoading: Signal<boolean> = this.store.selectSignal(isLoadingsSelector);

  constructor(private store: Store) {}

  public trackBy(index: number): number {
    return index;
  }
}
