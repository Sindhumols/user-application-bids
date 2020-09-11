import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserJewelleryComponent } from './user-jewellery.component';

describe('UserJewelleryComponent', () => {
  let component: UserJewelleryComponent;
  let fixture: ComponentFixture<UserJewelleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserJewelleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserJewelleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
