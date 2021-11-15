import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserModule } from '@angular/platform-browser';
import { LayoutModule } from '@uzo/ui/layout';
import { StoreModule } from '@ngrx/store';

import { NavigationHandlerDirective } from '../directives/navigation-handler.directive';
import { SafePipe } from '../pipes';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';
import { authReducer } from 'libs/auth/src/lib/state';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    NavigationHandlerDirective,
    SafePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatProgressSpinnerModule,
    LayoutModule,
    StoreModule.forRoot(authReducer),
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule { }
