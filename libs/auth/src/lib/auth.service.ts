import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient, PatientsResult } from '@uzo/profile';
import { HttpClient } from '@angular/common/http';
import { delay, map, tap} from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthService {
    constructor(private httpClient: HttpClient) {}
    
    getUser(): Observable<Patient> {
        return this.httpClient.get('https://randomuser.me/api/?nat=nl')
            .pipe(
                delay(200),
                map(x => (x as PatientsResult).results[0]),
                tap(x => localStorage.setItem('patient', JSON.stringify(x)))
            )
    }
}