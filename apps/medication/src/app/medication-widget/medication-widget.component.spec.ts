import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicationWidgetComponent } from './medication-widget.component';

describe('MedicationWidgetComponent', () => {
  let component: MedicationWidgetComponent;
  let fixture: ComponentFixture<MedicationWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicationWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicationWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
