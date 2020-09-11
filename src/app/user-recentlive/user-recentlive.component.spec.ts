import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRecentliveComponent } from './user-recentlive.component';

describe('UserRecentliveComponent', () => {
  let component: UserRecentliveComponent;
  let fixture: ComponentFixture<UserRecentliveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserRecentliveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRecentliveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
