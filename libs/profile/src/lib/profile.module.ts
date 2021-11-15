import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { AddressInfoComponent } from './address-info/address-info.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { MaterialModule } from '@uzo/ui/material';
import { ProfileSideMenuComponent } from './profile-side-menu/profile-side-menu.component';
@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [
    PersonalInfoComponent,
    AddressInfoComponent,
    ContactInfoComponent,
    ProfilePageComponent,
    ProfileSideMenuComponent
  ],
  exports: [
    PersonalInfoComponent,
    AddressInfoComponent,
    ContactInfoComponent,
    ProfilePageComponent
  ],
})
export class ProfileModule { }
