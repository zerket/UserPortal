import { AuthFacade } from '@uzo/auth/src/lib/state/auth.facade';
import { Component } from '@angular/core';
import { Patient, PatientsResult } from '@uzo/profile';
import { Observable } from 'rxjs';
import { delay, map, tap} from 'rxjs/operators';
import { Store } from '@ngrx/store';

@Component({
    selector: 'wms-core-user-details-topbar',
    templateUrl: './user-details-topbar.component.html',
    styleUrls: ['./user-details-topbar.component.less']
})
export class UserDetailsTopbarComponent {
    public patient!: Observable<Patient>;

    constructor(private authFacade: AuthFacade) {
        this.patient = this.authFacade.patient$;
    }
}
