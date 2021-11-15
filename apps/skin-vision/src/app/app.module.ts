import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SkinVisionWidgetComponent } from './skin-vision-widget/skin-vision-widget.component';

@NgModule({
  declarations: [
    AppComponent,
    SkinVisionWidgetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports: [
    SkinVisionWidgetComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
