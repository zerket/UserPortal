import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageCenterWidgetComponent } from './message-center-widget.component';

describe('MessageCenterWidgetComponent', () => {
  let component: MessageCenterWidgetComponent;
  let fixture: ComponentFixture<MessageCenterWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageCenterWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageCenterWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
