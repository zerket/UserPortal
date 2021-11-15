import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from './page/page.component';

const APP_ROUTES: Routes = [
    {
        path: '', component: PageComponent
    },
    {
        path: '*', redirectTo: ''
    }
];

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES, { onSameUrlNavigation: 'reload' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
