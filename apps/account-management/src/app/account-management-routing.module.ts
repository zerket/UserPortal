import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [{
    path: '*',
    loadChildren: () => import('./patient-details/patient-details.module').then(m => m.PatientDetailsModule)
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AccountManagementRoutingModule { }