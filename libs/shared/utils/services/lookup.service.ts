import { Injectable } from '@angular/core';

import { Microfrontend } from '../models/microfrontend.model';
import { RemoteComponent } from '../models/remotecomponent.model';

@Injectable({ providedIn: 'root' })
export class MockRouteService {

    public getAvailableServices(): Promise<Microfrontend[]> {
        return Promise.resolve([
            {
                // For Loading
                remoteEntry: 'http://localhost:3000/remoteEntry.js',
                remoteName: 'auth',
                exposedModule: './oAuthModule',

                // For Routing
                displayName: 'oAuth',
                routePath: 'o-auth',
                ngModuleName: 'OAuthModule'
            },
            {
                // For Loading
                remoteEntry: 'http://localhost:3001/remoteEntry.js',
                remoteName: 'skin_vision',
                exposedModule: './Module',

                // For Routing
                displayName: 'SkinVision',
                routePath: 'skinvision',
                ngModuleName: 'SkinVisionModule',

                redirectToSpa: true
            },
            {
                // For Loading
                remoteEntry: 'http://localhost:3120/remoteEntry.js',
                remoteName: 'medication',
                exposedModule: './Module',

                // For Routing
                displayName: 'Medication',
                routePath: 'medication',
                ngModuleName: 'AppModule'
            },
            {
                // For Loading
                remoteEntry: 'http://localhost:3310/remoteEntry.js',
                remoteName: 'message_center',
                exposedModule: './Module',

                // For Routing
                displayName: 'Message Center',
                routePath: 'message-center',
                ngModuleName: 'AppModule'
            },
            {
                // For Loading
                remoteEntry: 'http://localhost:3110/remoteEntry.js',
                remoteName: 'service_overview',
                exposedModule: './Module',

                // For Routing
                displayName: 'Service Overview',
                routePath: '',
                ngModuleName: 'ServiceOverviewModule'
            },
            {
                // For Loading
                remoteEntry: 'http://localhost:3222/remoteEntry.js',
                remoteName: 'account_management',
                exposedModule: './Module',

                // For Routing
                displayName: 'Account Management',
                routePath: 'profile',
                ngModuleName: 'PatientDetailsModule'
            },
        ] as Microfrontend[]);
    }

    public getPatientWidgets(): Promise<RemoteComponent[]> {
        return Promise.resolve([
            {
                // For Loading
                remoteEntry: 'http://localhost:3001/remoteEntry.js',
                remoteName: 'skin_vision',
                exposedModule: './Widget',

                // For Routing
                displayName: 'Skin Vision',
                routePath: 'skinvision',
                componentName: 'SkinVisionWidgetComponent',
            },
            {
                // For Loading
                remoteEntry: 'http://localhost:3310/remoteEntry.js',
                remoteName: 'message_center',
                exposedModule: './Widget',

                // For Routing
                displayName: 'Message Center',
                routePath: 'message-center',
                componentName: 'MessageCenterWidgetComponent',
            },
            {
                // For Loading
                remoteEntry: 'http://localhost:3120/remoteEntry.js',
                remoteName: 'medication',
                exposedModule: './Widget',

                // For Routing
                displayName: 'Medication',
                routePath: 'medication',
                componentName: 'MedicationWidgetComponent',
            },
        ]);
    }

    public getPatientDetailTopbarWidgets(): Promise<RemoteComponent> {
        return Promise.resolve(
            {
                // For Loading
                remoteEntry: 'http://localhost:3222/remoteEntry.js',
                remoteName: 'account_management',
                exposedModule: './UserDetailsTopbarWidget',

                // For Routing
                displayName: 'User details',
                routePath: 'profile',
                componentName: 'UserDetailsTopbarComponent',
            }
        );
    }

    public getPatientGpDetailsComponent(): Promise<RemoteComponent> {
        return Promise.resolve(
            {
                // For Loading
                remoteEntry: 'http://localhost:3222/remoteEntry.js',
                remoteName: 'account_management',
                exposedModule: './Widget',

                // For Routing
                displayName: 'User details',
                routePath: '',
                componentName: 'PatientGpDetailsComponent',
            }
        );
    }


    // public getPatientPortalRoute(): Promise<Microfrontend> {
    //     return Promise.resolve({
    //         // For Loading
    //         remoteEntry: 'http://localhost:3100/remoteEntry.js',
    //         remoteName: 'patient_portal',
    //         exposedModule: './PortalModule',

    //         // For Routing
    //         displayName: 'Patient Portal',
    //         routePath: '',
    //         ngModuleName: 'PortalModule'
    //     } as Microfrontend);
    // }

    // public getBeheerRoute(): Promise<Microfrontend> {
    //     return Promise.resolve({
    //         // For Loading
    //         remoteEntry: 'http://localhost:3200/remoteEntry.js',
    //         remoteName: 'beheer',
    //         exposedModule: './BeheerModule',

    //         // For Routing
    //         displayName: 'Beheer',
    //         routePath: '',
    //         ngModuleName: 'BeheerModule'
    //     } as Microfrontend);
    // }
}
