import { createAction, props } from '@ngrx/store';
import { Patient } from '@uzo/profile';

export enum AuthActionTypes {
    Register = 'Register',
    RegisterSuccess = 'Register Success',
    Login = 'Login',
    LoginSuccess = 'Login Success',
    GetUser = 'Get User',
    GetUserSuccess = 'Get User Success',
    Logout = 'Logout'
}

export const REGISTER = createAction(
    AuthActionTypes.Register
);

export const REGISTER_SUCCESS = createAction(
    AuthActionTypes.RegisterSuccess
);

export const LOGIN = createAction(
    AuthActionTypes.Login
);

export const LOGIN_SUCCESS = createAction(
    AuthActionTypes.LoginSuccess
);

export const GET_USER = createAction(
    AuthActionTypes.GetUser
);

export const GET_USER_SUCCESS = createAction(
    AuthActionTypes.GetUserSuccess,
    props<{patient: Patient}> ()
);

export const LOGOUT = createAction(
    AuthActionTypes.Logout
);