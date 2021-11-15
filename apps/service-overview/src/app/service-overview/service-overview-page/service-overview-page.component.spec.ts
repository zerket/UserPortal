import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceOverviewPageComponent } from './service-overview-page.component';

describe('ServiceOverviewPageComponent', () => {
  let component: ServiceOverviewPageComponent;
  let fixture: ComponentFixture<ServiceOverviewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceOverviewPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceOverviewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
