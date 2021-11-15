import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { WidgetProxyModule } from '@uzo/ui/widget-proxy';

import { ServiceOverviewPageComponent } from './service-overview-page/service-overview-page.component';
import { ServiceOverviewRoutingModule } from './service-overview-routing.module';

@NgModule({
  declarations: [ServiceOverviewPageComponent],
  imports: [
    CommonModule,
    ServiceOverviewRoutingModule,
    WidgetProxyModule,
    HttpClientModule,
  ]
})
export class ServiceOverviewModule { }
