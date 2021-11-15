import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientDetailtsPageComponent } from './patient-detailts-page/patient-detailts-page.component';

const routes: Routes = [{
  path: '',
  component: PatientDetailtsPageComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientDetailsRoutingModule { }
