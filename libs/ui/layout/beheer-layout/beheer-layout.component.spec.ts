import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeheerLayoutComponent } from './beheer-layout.component';

describe('BeheerLayoutComponent', () => {
  let component: BeheerLayoutComponent;
  let fixture: ComponentFixture<BeheerLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeheerLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeheerLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
