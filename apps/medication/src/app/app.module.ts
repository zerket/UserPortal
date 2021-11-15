import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { MedicationWidgetComponent } from './medication-widget/medication-widget.component';

@NgModule({
  declarations: [AppComponent, MedicationWidgetComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
  ],
  providers: [],
  exports:[
    MedicationWidgetComponent
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
