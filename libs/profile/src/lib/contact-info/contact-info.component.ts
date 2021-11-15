import { Component, OnInit } from '@angular/core';
import { Patient } from '@uzo/profile';

@Component({
  selector: 'uzo-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.scss']
})
export class ContactInfoComponent implements OnInit {
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
