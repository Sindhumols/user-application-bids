import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFashionComponent } from './user-fashion.component';

describe('UserFashionComponent', () => {
  let component: UserFashionComponent;
  let fixture: ComponentFixture<UserFashionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserFashionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFashionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
