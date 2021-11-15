import { Injectable } from "@angular/core";
import { Store } from '@ngrx/store';
import { getPatient } from ".";
import { AuthState } from "../models/auth-state";
import * as AuthActions from './auth.actions';

@Injectable({ providedIn: 'root' })
export class AuthFacade {
    patient$ = this.store.select(getPatient);

    constructor(private store: Store<AuthState>) {}

    register() {
        this.store.dispatch(AuthActions.REGISTER());
    }

    login() {
        this.store.dispatch(AuthActions.LOGIN());
    }

    logout() {
        this.store.dispatch(AuthActions.LOGOUT());
    }
}