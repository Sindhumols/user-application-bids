import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDealsOfTheDayComponent } from './user-deals-of-the-day.component';

describe('UserDealsOfTheDayComponent', () => {
  let component: UserDealsOfTheDayComponent;
  let fixture: ComponentFixture<UserDealsOfTheDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDealsOfTheDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDealsOfTheDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
