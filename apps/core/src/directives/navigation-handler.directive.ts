import { Directive, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { WMS_GLOBAL_EVENTS } from '../models/events.enum';

@Directive({ selector: '[wmsCoreNavigationHandler]'})
export class NavigationHandlerDirective {

    constructor(private router: Router) { }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    @HostListener('window:message', ['$event']) onPostMessage(event: any) {
        switch (event.data.event) {
            case WMS_GLOBAL_EVENTS.REDIRECT:
            case WMS_GLOBAL_EVENTS.NAVIGATE:
                this.router.navigate([`${event.data.url}`]);
                break;
            default:
                this.router.navigate([`${event.data.url}`]);
                break;
        }
    }
}

