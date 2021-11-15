import { Component, OnInit } from '@angular/core';
import { Patient } from '@uzo/profile';
import { PersonalInfoComponent } from '../personal-info/personal-info.component';

@Component({
  selector: 'uzo-profile-side-menu',
  templateUrl: './profile-side-menu.component.html',
  styleUrls: ['./profile-side-menu.component.less']
})
export class ProfileSideMenuComponent implements OnInit {
  public patient!: Patient;

  constructor() { 
    let data = localStorage.getItem("patient");
    if (data) {
      this.patient = JSON.parse(data) as Patient;
    }
  }

  ngOnInit(): void {
  }

}
