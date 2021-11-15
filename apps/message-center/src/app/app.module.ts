import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { MessageCenterWidgetComponent } from './message-center-widget/message-center-widget.component';

@NgModule({
  declarations: [AppComponent, MessageCenterWidgetComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
  ],
  providers: [],
  exports: [
    MessageCenterWidgetComponent
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
