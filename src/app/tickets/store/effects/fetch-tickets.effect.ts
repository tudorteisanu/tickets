import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, of, switchMap, map } from 'rxjs';
import { BackendErrorInterface } from 'src/app/shared/types/backend-error.interface';
import { TicketsService } from '../../services/tickets.service';
import { fetchTicketsAction, fetchTicketsActionFailure, fetchTicketsActionSuccess } from '../actions/fetch-tickets.action';

@Injectable()
export class FetchTicketsEffect {
  fetchTickets$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchTicketsAction),
      switchMap(() => {
        return this.ticketsService.fetchTickets().pipe(
          map((tickets) => {
            return fetchTicketsActionSuccess({ tickets });
          }),
          catchError((error: BackendErrorInterface) => {
            return of(fetchTicketsActionFailure({ error }));
          }),
        );
      }),
    ),
  );
  constructor(
    private actions$: Actions,
    private ticketsService: TicketsService,
  ) { }
}
