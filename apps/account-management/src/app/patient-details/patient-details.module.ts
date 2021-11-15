import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileModule } from '@uzo/profile';

import { PatientDetailsRoutingModule } from './patient-details-routing.module';
import { PatientDetailtsPageComponent } from './patient-detailts-page/patient-detailts-page.component';


@NgModule({
  declarations: [
    PatientDetailtsPageComponent
  ],
  imports: [
    CommonModule,
    PatientDetailsRoutingModule,
    ProfileModule
  ]
})
export class PatientDetailsModule { }
