import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserParkComponent } from './user-park.component';

describe('UserParkComponent', () => {
  let component: UserParkComponent;
  let fixture: ComponentFixture<UserParkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserParkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserParkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
