import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserStationaryComponent } from './user-stationary.component';

describe('UserStationaryComponent', () => {
  let component: UserStationaryComponent;
  let fixture: ComponentFixture<UserStationaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserStationaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserStationaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
