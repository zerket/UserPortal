import { Component, OnInit } from '@angular/core';
import { Patient } from '@uzo/profile';

@Component({
  selector: 'uzo-address-info',
  templateUrl: './address-info.component.html',
  styleUrls: ['./address-info.component.scss']
})
export class AddressInfoComponent implements OnInit {

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
