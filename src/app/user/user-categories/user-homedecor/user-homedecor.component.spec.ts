import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHomedecorComponent } from './user-homedecor.component';

describe('UserHomedecorComponent', () => {
  let component: UserHomedecorComponent;
  let fixture: ComponentFixture<UserHomedecorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserHomedecorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserHomedecorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
