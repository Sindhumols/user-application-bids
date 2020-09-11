import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCowrkComponent } from './user-cowrk.component';

describe('UserCowrkComponent', () => {
  let component: UserCowrkComponent;
  let fixture: ComponentFixture<UserCowrkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCowrkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCowrkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
