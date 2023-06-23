import { Action, createReducer, on } from '@ngrx/store';
import { FAQStateInterface } from '../types/faq-state.interface';
import {
  fetchFaqAction,
  fetchFaqFailureAction,
  fetchFaqSuccessAction
} from './actions/fetch-faqs.action';
import { faqsInitialState } from './faq.state';

const faqReducer = createReducer(
  faqsInitialState,
  on(
    fetchFaqAction,
    (state): FAQStateInterface => ({
      ...state,
      isLoading: true,
      error: null,
    }),
  ),
  on(
    fetchFaqSuccessAction,
    (state, action): FAQStateInterface => ({
      ...state,
      isLoading: false,
      error: null,
      data: action.faqs
    }),
  ),
  on(
    fetchFaqFailureAction,
    (state, action): FAQStateInterface => ({
      ...state,
      isLoading: false,
      error: action.errors,
    }),
  ),
);

export function reducers(state: FAQStateInterface, action: Action): FAQStateInterface {
  return faqReducer(state, action);
}
