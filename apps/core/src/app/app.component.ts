import { loadRemoteModule } from '@angular-architects/module-federation/src';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router, Routes } from '@angular/router';
import { BeheerLayoutComponent, PatientLayoutComponent } from '@uzo/ui/layout';
import { MockRouteService } from '@uzo/shared/utils';

@Component({
    selector: 'app-root',
    template: `<router-outlet></router-outlet>`
})
export class AppComponent implements OnInit {

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private lookupService: MockRouteService) {

        // this.router.events.pipe(
        //     tap(data => {
        //         if (data instanceof NavigationStart) {
        //             debugger;
        //         }
        //     })
        // ).subscribe()
    }

    async ngOnInit(): Promise<void> {

        const isAdminModule = false;
        const serviceRoutes = await this.lookupService.getAvailableServices();

        const lazyRoutes: Routes = [
            {
                path: '',
                component: isAdminModule ? BeheerLayoutComponent : PatientLayoutComponent,
                children: serviceRoutes.map(o => ({
                    path: o.routePath,
                    data: { redirectToSpa: o?.redirectToSpa ?? false },
                    loadChildren: () => loadRemoteModule(o).then(m => m[o.ngModuleName])
                }))
            }
        ]
        console.log("lazy routes:", lazyRoutes);
        this.router.resetConfig([...lazyRoutes]);

        this.router.navigate(['/']);
    }

    private getRouterDataFromChild(snapshot: ActivatedRouteSnapshot): boolean {

        if (snapshot.data.redirectToSpa) {
            console.log('redirectToSpa:', snapshot.data.redirectToSpa)
            return snapshot.data.redirectToSpa;
        }

        if (snapshot.children.length == 0) {
            console.log('no childen:')
            return false;
        }

        this.getRouterDataFromChild(snapshot.children[0]);

        return true;
    }
}
