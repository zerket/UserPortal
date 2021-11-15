import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { AuthService } from '../auth.service';
import * as AuthActions from './auth.actions';

@Injectable()
export class AuthEffects {
    constructor(
        private authService: AuthService,
        private actions$: Actions
    ) { }

    getUser$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AuthActions.GET_USER),
            switchMap(() => 
                this.authService.getUser().pipe(
                    map(patient => AuthActions.GET_USER_SUCCESS({ patient }))                   
                )
            )
        )
    );
}