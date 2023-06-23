import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FAQStateInterface } from '../types/faq-state.interface';

export const faqFeatureSelector =
  createFeatureSelector<FAQStateInterface>('faq');

export const isLoadingsSelector = createSelector(
  faqFeatureSelector,
  (state: FAQStateInterface) => state.isLoading,
);

export const errorMessageSelector = createSelector(
  faqFeatureSelector,
  (state: FAQStateInterface) => state.error,
);

export const faqsSelector = createSelector(
  faqFeatureSelector,
  (state: FAQStateInterface) => state.data,
);