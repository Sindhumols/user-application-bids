import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCategoriesComponent } from './user-categories.component';

describe('UserCategoriesComponent', () => {
  let component: UserCategoriesComponent;
  let fixture: ComponentFixture<UserCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
