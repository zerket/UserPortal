import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkinVisionWidgetComponent } from './skin-vision-widget.component';

describe('SkinVisionWidgetComponent', () => {
  let component: SkinVisionWidgetComponent;
  let fixture: ComponentFixture<SkinVisionWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkinVisionWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkinVisionWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
