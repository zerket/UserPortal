import { loadRemoteModule } from '@angular-architects/module-federation';
import { Component, ComponentFactoryResolver, Injector, Input, OnChanges, ViewChild, ViewContainerRef } from '@angular/core';
import { RemoteComponent } from '@uzo/shared/utils';

@Component({
    selector: 'ui-widget-proxy',
    template: `<ng-container #placeHolder></ng-container>`
})
export class WidgetProxyComponent implements OnChanges {
    @ViewChild('placeHolder', { read: ViewContainerRef, static: true })
    viewContainer!: ViewContainerRef;

    @Input() widget: RemoteComponent | undefined;

    constructor(
        private injector: Injector,
        private cfr: ComponentFactoryResolver
    ) { }

    async ngOnChanges(): Promise<void> {
        if (!this.widget) {
            return;
        }

        this.viewContainer.clear();

        const component = await loadRemoteModule(this.widget)
            .then(m => m[this.widget?.componentName || '']);

        const factory = this.cfr.resolveComponentFactory(component);

        this.viewContainer.createComponent(factory, undefined, this.injector);
    }

}
