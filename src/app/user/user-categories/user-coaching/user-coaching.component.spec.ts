import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCoachingComponent } from './user-coaching.component';

describe('UserCoachingComponent', () => {
  let component: UserCoachingComponent;
  let fixture: ComponentFixture<UserCoachingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCoachingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCoachingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
