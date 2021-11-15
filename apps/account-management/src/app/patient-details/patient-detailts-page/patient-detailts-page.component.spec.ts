import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientDetailtsPageComponent } from './patient-detailts-page.component';

describe('PatientDetailtsPageComponent', () => {
  let component: PatientDetailtsPageComponent;
  let fixture: ComponentFixture<PatientDetailtsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientDetailtsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientDetailtsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
