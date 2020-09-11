import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFashionsComponent } from './user-fashions.component';

describe('UserFashionsComponent', () => {
  let component: UserFashionsComponent;
  let fixture: ComponentFixture<UserFashionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserFashionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFashionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
