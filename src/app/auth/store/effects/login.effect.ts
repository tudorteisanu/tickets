import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, of, switchMap, map, tap } from 'rxjs';
import { BackendError } from 'src/app/shared/types/backendError.interface';
import { AuthService } from '../../services/auth.service';
import { PageRoutes } from 'src/app/shared/types/page-routes.enum';
import { Router } from '@angular/router';
import { loginAction, loginFailureAction, loginSuccessAction } from '../actions/login.action';


@Injectable()
export class LoginEffect {
    login$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loginAction),
            switchMap(({ loginInput }) => {
                return this.authService.login(loginInput).pipe(
                    map((currentUser) => {
                        return loginSuccessAction({ currentUser });
                    }),
                    catchError((errors: BackendError) => {
                        return of(loginFailureAction({ errors }));
                    }),
                );
            }),
        ),
    );

    redirectAfterLogin$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(loginSuccessAction),
                tap(() => {
                    this.router.navigate([PageRoutes.Home]);
                }),
            ),
        { dispatch: false },
    );

    constructor(
        private actions$: Actions,
        private authService: AuthService,
        private router: Router,
    ) { }
}
