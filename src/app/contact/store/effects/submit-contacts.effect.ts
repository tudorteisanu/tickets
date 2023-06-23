import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, of, switchMap, map } from 'rxjs';
import { submitContactsAction, submitContactsFailureAction, submitContactsSuccessAction } from '../actions/submit-contacts.action';
import { BackendErrorInterface } from 'src/app/shared/types/backend-error.interface';
import { ContactService } from '../../services/contact.service';

@Injectable()
export class SubmitContactsEffect {
  singUp$ = createEffect(() =>
    this.actions$.pipe(
      ofType(submitContactsAction),
      switchMap(({contactsInput}) => {
        return this.contactsService.contactUs(contactsInput).pipe(
          map(() => {
            return submitContactsSuccessAction();
          }),
          catchError((errors: BackendErrorInterface) => {
            return of(submitContactsFailureAction({ errors }));
          }),
        );
      }),
    ),
  );
  constructor(
    private actions$: Actions,
    private contactsService: ContactService,
  ) { }
}
