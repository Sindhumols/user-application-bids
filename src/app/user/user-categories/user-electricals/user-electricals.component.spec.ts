import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserElectricalsComponent } from './user-electricals.component';

describe('UserElectricalsComponent', () => {
  let component: UserElectricalsComponent;
  let fixture: ComponentFixture<UserElectricalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserElectricalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserElectricalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
