import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSpaComponent } from './user-spa.component';

describe('UserSpaComponent', () => {
  let component: UserSpaComponent;
  let fixture: ComponentFixture<UserSpaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSpaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSpaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
