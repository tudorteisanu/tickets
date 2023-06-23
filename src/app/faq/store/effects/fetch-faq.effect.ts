import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, of, switchMap, map } from 'rxjs';
import { fetchFaqAction, fetchFaqFailureAction, fetchFaqSuccessAction } from '../actions/fetch-faqs.action';
import { BackendErrorInterface } from 'src/app/shared/types/backend-error.interface';
import { FaqService } from '../../services/faq.service';

@Injectable()
export class FetchFAQEffect {
  singUp$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchFaqAction),
      switchMap(() => {
        return this.faqService.fetchFaq().pipe(
          map((faqs) => {
            return fetchFaqSuccessAction({ faqs });
          }),
          catchError((errors: BackendErrorInterface) => {
            return of(fetchFaqFailureAction({ errors }));
          }),
        );
      }),
    ),
  );
  constructor(
    private actions$: Actions,
    private faqService: FaqService,
  ) { }
}
