import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '../actionTypes';
import { BackendErrorInterface } from 'src/app/shared/types/backend-error.interface';
import { FaqInterface } from '@/faq/types/faq.interface';

export const fetchFaqAction = createAction(
  ActionTypes.FetchFAQs,
);

export const fetchFaqSuccessAction = createAction(
  ActionTypes.FetchFAQsSuccess,
  props<{ faqs: FaqInterface[] }>()
);

export const fetchFaqFailureAction = createAction(
  ActionTypes.FetchFAQsFailure,
  props<{ errors: BackendErrorInterface }>()
);
