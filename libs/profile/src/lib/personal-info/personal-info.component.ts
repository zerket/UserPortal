import { Component, OnInit } from '@angular/core';
import { Patient } from '@uzo/profile';

@Component({
  selector: 'uzo-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {
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
