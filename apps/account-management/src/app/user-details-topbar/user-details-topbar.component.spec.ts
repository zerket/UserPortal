import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailsTopbarComponent } from './user-details-topbar.component';

describe('UserDetailsTopbarComponent', () => {
  let component: UserDetailsTopbarComponent;
  let fixture: ComponentFixture<UserDetailsTopbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDetailsTopbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailsTopbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
