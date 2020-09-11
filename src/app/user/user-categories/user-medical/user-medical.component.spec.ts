import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMedicalComponent } from './user-medical.component';

describe('UserMedicalComponent', () => {
  let component: UserMedicalComponent;
  let fixture: ComponentFixture<UserMedicalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserMedicalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMedicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
