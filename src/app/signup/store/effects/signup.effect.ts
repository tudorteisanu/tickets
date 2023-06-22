import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, of, switchMap, map, tap } from 'rxjs';
import { signupAction, signupFailureAction, signupSuccessAction } from '../actions/singup.action';
import { BackendError } from 'src/app/shared/types/backendError.interface';
import { CredentialsInterface } from 'src/app/shared/types/credentials.interface';
import { AuthService } from '../../services/auth.service';
import { PageRoutes } from 'src/app/shared/types/page-routes.enum';
import { Router } from '@angular/router';


@Injectable()
export class SingUpEffect {
    singUp$ = createEffect(() =>
        this.actions$.pipe(
            ofType(signupAction),
            switchMap(({ signUpInput }) => {
                return this.authService.singup(signUpInput).pipe(
                    map((credentials: CredentialsInterface) => {
                        return signupSuccessAction({ credentials });
                    }),
                    catchError((error: BackendError) => {
                        return of(signupFailureAction({ error }));
                    }),
                );
            }),
        ),
    );

    redirectAfterSignUp$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(signupSuccessAction),
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
