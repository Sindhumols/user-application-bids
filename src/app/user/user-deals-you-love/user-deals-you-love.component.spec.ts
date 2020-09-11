import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDealsYouLoveComponent } from './user-deals-you-love.component';

describe('UserDealsYouLoveComponent', () => {
  let component: UserDealsYouLoveComponent;
  let fixture: ComponentFixture<UserDealsYouLoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDealsYouLoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDealsYouLoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
