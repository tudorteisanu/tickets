import { fetchTicketsAction } from '@/tickets/store/actions/fetch-tickets.action';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit{
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(fetchTicketsAction());
  }
}
