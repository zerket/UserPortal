import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientGpDetailsComponent } from './patient-gp-details.component';

describe('PatientGpDetailsComponent', () => {
  let component: PatientGpDetailsComponent;
  let fixture: ComponentFixture<PatientGpDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientGpDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientGpDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
