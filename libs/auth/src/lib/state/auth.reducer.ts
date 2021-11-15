import { createFeatureSelector, createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.actions';
import { Patient } from '@uzo/profile';

export const initialState = {};

export const getPatient = createFeatureSelector<Patient>('patient');

export const authReducer = createReducer(
    initialState,
    on(AuthActions.GET_USER, (state) => ({
        ...state
    })),
    on(AuthActions.GET_USER_SUCCESS, (state, { patient }) => ({
        ...state,
        patient
    })),
)