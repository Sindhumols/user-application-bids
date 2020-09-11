import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOfferComponent } from './user-offer.component';

describe('UserOfferComponent', () => {
  let component: UserOfferComponent;
  let fixture: ComponentFixture<UserOfferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserOfferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
