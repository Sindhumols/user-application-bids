import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPopularBrandsComponent } from './user-popular-brands.component';

describe('UserPopularBrandsComponent', () => {
  let component: UserPopularBrandsComponent;
  let fixture: ComponentFixture<UserPopularBrandsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPopularBrandsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPopularBrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
