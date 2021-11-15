import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { authReducer } from './state';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './state/auth.effects';
import { AuthService } from './auth.service';
import { AuthFacade } from './state/auth.facade';

@NgModule({
  imports: [CommonModule,
    StoreModule.forRoot(authReducer),
    EffectsModule.forFeature([AuthEffects])
  ],
  providers: [
    AuthEffects,
    AuthService,
    AuthFacade
  ]
})
export class AuthModule { }
