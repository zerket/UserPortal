import { LoadRemoteModuleOptions } from '@angular-architects/module-federation';

export type RemoteComponent = LoadRemoteModuleOptions & {
    displayName: string;
    routePath: string;
    componentName: string;
};
