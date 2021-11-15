import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { WidgetProxyComponent } from './widget-proxy.component';

@NgModule({
    imports: [CommonModule],
    declarations: [WidgetProxyComponent],
    exports: [WidgetProxyComponent]
})
export class WidgetProxyModule { }
