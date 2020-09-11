import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCarspaComponent } from './user-carspa.component';

describe('UserCarspaComponent', () => {
  let component: UserCarspaComponent;
  let fixture: ComponentFixture<UserCarspaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCarspaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCarspaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
