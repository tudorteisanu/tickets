import { Component } from '@angular/core';

@Component({
  selector: 'app-tickets-search-result',
  templateUrl: './tickets-search-result.component.html',
  styleUrls: ['./tickets-search-result.component.scss']
})
export class TicketsSearchResultComponent {
  tickets = [...new Array(9)].map((_, index) => index);

  public trackBy(index: number): number {
    return index;
  }
}
