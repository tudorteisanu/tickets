import { BackendErrorInterface } from '@/shared/types/backend-error.interface';
import { TicketInterface } from '@/shared/types/ticket.interface';
import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '../actionTypes';

export const fetchTicketsAction = createAction(ActionTypes.FetchTickets);

export const fetchTicketsActionSuccess = createAction(
  ActionTypes.FetchTicketsSuccess, 
  props<{tickets: TicketInterface[]}>());

export const fetchTicketsActionFailure = createAction(
  ActionTypes.FetchTicketsFailure, 
  props<{ error: BackendErrorInterface | null }>()
);