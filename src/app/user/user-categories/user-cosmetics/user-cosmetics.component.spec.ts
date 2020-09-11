import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCosmeticsComponent } from './user-cosmetics.component';

describe('UserCosmeticsComponent', () => {
  let component: UserCosmeticsComponent;
  let fixture: ComponentFixture<UserCosmeticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCosmeticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCosmeticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
