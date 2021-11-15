import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@uzo/ui/material';
import { WidgetProxyModule } from '@uzo/ui/widget-proxy';
import { BeheerLayoutComponent } from './beheer-layout/beheer-layout.component';
import { PatientLayoutComponent } from './patient-layout/patient-layout.component';
import { BodyComponent } from './_elements/body/body.component';
import { FooterComponent } from './_elements/footer/footer.component';
import { HeaderComponent } from './_elements/header/header.component';
import { LeftSideComponent } from './_elements/left-side/left-side.component';
import { RightSideComponent } from './_elements/right-side/right-side.component';

@NgModule({
  declarations: [
    BodyComponent,
    FooterComponent,
    HeaderComponent,
    RightSideComponent,
    LeftSideComponent,
    PatientLayoutComponent,
    BeheerLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    WidgetProxyModule,
    MaterialModule
  ],
  exports: [
    PatientLayoutComponent,
    BeheerLayoutComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LayoutModule { }
