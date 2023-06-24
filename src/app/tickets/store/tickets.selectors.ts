import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TicketStateInterface } from '../types/ticket-state.interface';

export const faqFeatureSelector =
  createFeatureSelector<TicketStateInterface>('tickets');

export const isLoadingsSelector = createSelector(
  faqFeatureSelector,
  (state: TicketStateInterface) => state.isLoading,
);

export const errorMessageSelector = createSelector(
  faqFeatureSelector,
  (state: TicketStateInterface) => state.error,
);

export const ticketsSelector = createSelector(
  faqFeatureSelector,
  (state: TicketStateInterface) => state.data,
);
