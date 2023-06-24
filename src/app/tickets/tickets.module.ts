import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { TicketsComponent } from './components/tickets/tickets.component';
import {RouterModule, Routes} from '@angular/router';
import { TicketsHeadingComponent } from './components/tickets-heading/tickets-heading.component';
import { TicketsSearchComponent } from './components/tickets-search/tickets-search.component';
import { TicketsSearchResultComponent } from './components/tickets-search-result/tickets-search-result.component';
import {TicketCardComponent} from '../shared/components/ticket-card/ticket-card.component';
import { EffectsModule } from '@ngrx/effects';
import { FetchTicketsEffect } from './store/effects/fetch-tickets.effect';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { LoaderComponent } from '../shared/components/loader/loader.component';

const routes: Routes =[
  {
    path: 'tickets',
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
    TicketCardComponent,
    EffectsModule.forFeature([FetchTicketsEffect]),
    StoreModule.forFeature('tickets', reducers),
    LoaderComponent
  ]
})
export class TicketsModule { }
