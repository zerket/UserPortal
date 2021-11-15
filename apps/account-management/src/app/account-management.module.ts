import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserDetailsTopbarComponent } from './user-details-topbar/user-details-topbar.component';
import { PatientGpDetailsComponent } from './patient-gp-details/patient-gp-details.component';
import { AccountManagementRoutingModule } from './account-management-routing.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromAccount from './+state/account.reducer';
import { AccountEffects } from './+state/account.effects';

@NgModule({
    declarations: [
        AppComponent,
        UserDetailsTopbarComponent,
        PatientGpDetailsComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AccountManagementRoutingModule,
    StoreModule.forFeature(
      fromAccount.ACCOUNT_FEATURE_KEY,
      fromAccount.reducer
    ),
    EffectsModule.forFeature([AccountEffects]),
    ],
    providers: [],
    exports: [
        UserDetailsTopbarComponent,
        PatientGpDetailsComponent,
    ],
    bootstrap: [AppComponent],
})
export class AccountManagementModule {}
