import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserResturantsComponent } from './user-resturants.component';

describe('UserResturantsComponent', () => {
  let component: UserResturantsComponent;
  let fixture: ComponentFixture<UserResturantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserResturantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserResturantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
