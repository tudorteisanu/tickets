import { Action, createReducer, on } from '@ngrx/store';
import { TicketStateInterface } from '../types/ticket-state.interface';

import { ticketsInitialState } from './tickets.state';
import { fetchTicketsAction, fetchTicketsActionFailure, fetchTicketsActionSuccess } from './actions/fetch-tickets.action';

const ticketsReducer = createReducer(
  ticketsInitialState,
  on(
    fetchTicketsAction,
    (state): TicketStateInterface => ({
      ...state,
      isLoading: true,
      error: null,
    }),
  ),
  on(
    fetchTicketsActionSuccess,
    (state, action): TicketStateInterface => ({
      ...state,
      isLoading: false,
      error: null,
      data: action.tickets,
    }),
  ),
  on(
    fetchTicketsActionFailure,
    (state, action): TicketStateInterface => ({
      ...state,
      isLoading: false,
      error: action.error,
    }),
  ),
);

export function reducers(state: TicketStateInterface, action: Action): TicketStateInterface {
  return ticketsReducer(state, action);
}
