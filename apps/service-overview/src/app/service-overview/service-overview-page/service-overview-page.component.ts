import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MockRouteService, RemoteComponent } from '@uzo/shared/utils';
import { tap } from 'rxjs/operators';

@Component({
    selector: 'ui-service-overview-page',
    templateUrl: './service-overview-page.component.html',
    styleUrls: ['./service-overview-page.component.less']
})
export class ServiceOverviewPageComponent implements OnInit {

    widgets: RemoteComponent[] = [];
    gpDetails!: RemoteComponent;
    data: any = {};

    constructor(
        private router: Router,
        private httpClient: HttpClient,
        private lookupService: MockRouteService) { }

    async ngOnInit() {
        this.widgets = await this.lookupService.getPatientWidgets();
        this.gpDetails = await this.lookupService.getPatientGpDetailsComponent();
    }
}
