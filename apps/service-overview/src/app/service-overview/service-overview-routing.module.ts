import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceOverviewPageComponent } from './service-overview-page/service-overview-page.component';

const routes: Routes = [
    {
        path: '',
        component: ServiceOverviewPageComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ServiceOverviewRoutingModule { }
