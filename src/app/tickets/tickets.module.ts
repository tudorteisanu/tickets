import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { TicketsComponent } from './components/tickets/tickets.component';
import {RouterModule, Routes} from '@angular/router';
import { TicketsHeadingComponent } from './components/tickets-heading/tickets-heading.component';
import { TicketsSearchComponent } from './components/tickets-search/tickets-search.component';
import { TicketsSearchResultComponent } from './components/tickets-search-result/tickets-search-result.component';
import {TicketCardComponent} from '../shared/components/ticket-card/ticket-card.component';

const routes: Routes =[
  {
    path: '',
    component: TicketsComponent
  }
];

@NgModule({
  declarations: [
    TicketsComponent,
    TicketsHeadingComponent,
    TicketsSearchComponent,
    TicketsSearchResultComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgOptimizedImage,
    TicketCardComponent
  ]
})
export class TicketsModule { }
